import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class RenderDatePicker extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.props.input.onChange(moment(date, 'MM/DD/YYYY'));
  }

  render() {
    const { 
      input, 
      label, 
      meta: { touched, error } 
    } = this.props;

    const className = `form-group ${touched && error ? 'has-error' : ''}`

    return (
      <div className={className}>
        <label>{label}</label>
        <Datepicker
          {...input}
          selected={input.value ? moment(input.value, 'MM/DD/YYYY') : null}
          onChange={this.handleChange}
          className="form-control"
          showYearDropdown={true}
        />
        <div className="help-block">
          {touched ? error : ''}
        </div>
      </div>
    );
  }
}

export { RenderDatePicker };
