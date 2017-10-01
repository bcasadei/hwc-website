import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import _ from 'lodash';
import { Grid } from 'react-bootstrap';
import { RenderDatePicker } from './common';
import { selectPackage } from '../actions';

class BookingRoute extends Component {

  renderSelectField(field) {
    const { meta: { touched, error } } = field;

    const className = `form-group ${touched && error ? 'has-error' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <select
          name={field.name}
          className="form-control sm-select"
          {...field.input}>
          <option disabled>Choose a Wedding Package...</option>
          {field.packages.map(packageOption =>
            <option
              value={packageOption.name}
              key={packageOption.name}
            >
              {packageOption.name}
            </option>
          )}
        </select>

        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(values);
    console.log(this.props.activePackage)
  }

  onPackageChange(value) {
    const { packages, selectPackage } = this.props;

    selectPackage(_.find(packages, { 'name': value }));
  }

  render() {
    console.log(this.props);

    const { handleSubmit } = this.props;

    return (
      <div>
        <div className="border"></div>
        <Grid>
          <h3>Book Your Wedding</h3>
          <h4>Check availability and reserve a venue</h4>
          <p><Link to="/pricing">Visit our Pricing page for details and pricing on each package</Link></p>

          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <Field
              label="Choose a Date"
              name="date"
              component={RenderDatePicker}
            />
            
            <Field 
              label="Choose a Wedding Package"
              name="weddingPackage" 
              component={this.renderSelectField}
              className="form-control sm-select" 
              props={this.props}
              onChange={(event) => { this.onPackageChange(event.target.value) }}
            />

            <div className="total">
                Total: {this.props.activePackage ? `$${this.props.activePackage.price}` : ''}
            </div>

            <button type="submit" className="btn btn-default">Continue</button>
          </form>
          <div className="total">Or</div>
          <Link to="/booking/custom">
            <button type="button" className="btn btn-default">Create a Custom Package</button>
          </Link>
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
  if (values.weddingPackage === 'Choose a Wedding Package...') {
    errors.weddingPackage = "Select a package to continue!";
  }
  // If errors === {}, form is fine to submit
  // If errors has any properties, form is invalid
  return errors;
}

const selector = formValueSelector('BookingForm');

function mapStateToProps(state) {
  const date = selector(state, 'date');
  return {
    packages: state.packages,
    activePackage: state.activePackage,
    date
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectPackage: selectPackage }, dispatch);
}

export default BookingRoute = reduxForm({
  validate,
  form: 'BookingForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(BookingRoute)
);
