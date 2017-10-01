import React, { Component } from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm} from 'redux-form';
import { Grid } from 'react-bootstrap';
import { RenderDatePicker } from './common';
import { selectCeremony, selectReception } from '../actions';

class CustomBookingRoute extends Component {

  renderInputField(field) {
    const { meta: { touched, error } } = field;

    const className = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          name={field.name}
          className={field.className}
          type="text"
          size="4"
          {...field.input}
        />
        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderSelectField(field) {
    const { meta: { touched, error }, children } = field;

    const className = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <select
          name={field.name}
          className={field.className}
          {...field.input}>
          <option disabled>Choose a Location...</option>
          {children}
        </select>

        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onCeremonyChange(value) {
    const { ceremonyLocations, selectCeremony } = this.props;

    selectCeremony(_.find(ceremonyLocations, { 'name': value }));
  }

  onReceptionChange(value) {
    const { receptionLocations, selectReception } = this.props;

    selectReception(_.find(receptionLocations, { 'name': value }));
  }

  getTotal(){
    const { activeCeremony, activeReception } = this.props;

    if(activeCeremony && activeReception) {
      const ceremony = parseFloat(activeCeremony.price);
      const reception = parseFloat(activeReception.price);
      return ceremony + reception;
    }
    else if(activeCeremony) {
      return activeCeremony.price;
    }
    else if(activeReception) {
      return activeReception.price;
    }
    else {
      return '';
    }
  }

  onSubmit(values) {
    console.log(values);
  }

  render() {
    console.log(this.props);

    const { handleSubmit } = this.props;

    return (
      <div>
      <div className="border"></div>
      <Grid>
        <h3>Book Your Wedding</h3>
        <h4>Select options for your custom wedding package</h4>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Choose a Date"
            name="date"
            component={RenderDatePicker}
          />

          <Field
            label="Number of Guests"
            name="guests"
            component={this.renderInputField}
            className="form-control sm-input"
            props={this.props}
          />

          <Field
            label="Ceremony Location"
            name="ceremony"
            component={this.renderSelectField}
            className="form-control sm-select"
            props={this.props}
            onChange={(event) => { this.onCeremonyChange(event.target.value) }}
          >
            {this.props.ceremonyLocations.map(locationOption =>
              <option
                value={locationOption.name}
                key={locationOption.name}
              >
                {locationOption.name}
              </option>
            )}
          </Field>

          <Field
            label="Reception Location"
            name="reception"
            component={this.renderSelectField}
            className="form-control sm-select"
            props={this.props}
            onChange={(event) => { this.onReceptionChange(event.target.value) }}
          >
            {this.props.receptionLocations.map(locationOption =>
              <option
                value={locationOption.name}
                key={locationOption.name}
              >
                {locationOption.name}
              </option>
            )}
          </Field>

          <div className="total">Total: {`$${this.getTotal()}`}
           </div>
          <button type="submit" className="btn btn-default">Continue</button>
        </form>
      </Grid>
      
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  // TODO Add error check to see if date is valid
  // TODO Add error check to see if date is available
  if (!values.date) {
    errors.date = "Select a date to continue!";
  }
  
  if(!values.guests || /\D/.test(values.guests)) {
    errors.guests = "Enter number (e.g. 100) of guests to continue!";
  }

  if (values.guests > 200) {
    errors.guests = "Enter a number less than or equal to 200!";
  }

  if (values.ceremony === 'Choose a Location...') {
    errors.ceremony = "Select a location for your ceremony to continue!";
  }

  if (values.reception === 'Choose a Location...') {
    errors.reception = "Select a location for your reception to continue!";
  }

  return errors;
}

function mapStateToProps(state) {
  return {
    ceremonyLocations: state.ceremonyLocations,
    receptionLocations: state.receptionLocations,
    activeCeremony: state.activeCeremony,
    activeReception: state.activeReception
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCeremony: selectCeremony, selectReception: selectReception }, dispatch);
}

export default reduxForm({
  validate,
  form: 'CustomBookingForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(CustomBookingRoute)
);
