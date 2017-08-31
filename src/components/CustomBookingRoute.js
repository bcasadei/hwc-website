import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Grid } from 'react-bootstrap';
import { RenderDatePicker } from './common';
import { selectDate, enterGuests } from '../actions';

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

  renderCeremonyField(field) {
    const { meta: { touched, error } } = field;

    const className = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <select
          name={field.name}
          className="form-control sm-select"
          {...field.input}>
          <option disabled>Choose a Location...</option>
          {field.ceremonyLocations.map(locationOption =>
            <option
              value={locationOption.name}
              key={locationOption.name}
            >
              {locationOption.name}
            </option>
          )}
        </select>

        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  renderReceptionField(field) {
    const { meta: { touched, error } } = field;

    const className = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <select
          name={field.name}
          className="form-control sm-select"
          {...field.input}>
          <option disabled>Choose a Location...</option>
          {field.receptionLocations.map(locationOption =>
            <option
              value={locationOption.name}
              key={locationOption.name}
            >
              {locationOption.name}
            </option>
          )}
        </select>

        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onDateChange(value) {
    this.props.selectDate(value);
  }

  onGuestsChange(value) {
    this.props.enterGuests(value);
  }

  render() {
    console.log(this.props.guests);
    return (
      <div>
      <div className="border"></div>
      <Grid>
        <h3>Book Your Wedding</h3>
        <h4>Select options for your custom wedding package</h4>
        <form action="">
          <Field
            label="Choose a Date"
            name="date"
            component={RenderDatePicker}
            onChange={(event) => { this.onDateChange(event._d) }}
          />

          <Field
            label="Number of Guests"
            name="guests"
            component={this.renderInputField}
            className="form-control sm-input"
            props={this.props}
            onChange={(event) => { this.onGuestsChange(event.target.value) }}
          />

          <Field
            label="Ceremony Location"
            name="ceremony"
            component={this.renderCeremonyField}
            className="form-control sm-select"
            props={this.props}
          />

          <Field
            label="Reception Location"
            name="reception"
            component={this.renderReceptionField}
            className="form-control sm-select"
            props={this.props}
          />

          <div className="total">Total:</div>
          <button type="button" className="btn btn-default">Continue</button>
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

  return errors;
}

function mapStateToProps(state) {
  return {
    ceremonyLocations: state.ceremonyLocations,
    receptionLocations: state.receptionLocations,
    date: state.activeDate,
    guests: state.numberGuests
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectDate: selectDate, enterGuests: enterGuests }, dispatch);
}

export default reduxForm({
  validate,
  form: 'CustomBookingForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(CustomBookingRoute)
);
