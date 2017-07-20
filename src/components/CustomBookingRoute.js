import React, { Component } from 'react';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import { Grid, Row, Col } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';

class CustomBookingRoute extends Component {

  constructor(props) {
      super(props)

      this.state = {
        startDate: moment()
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
      this.setState({
        startDate: date
      });
    }

    renderOptions(max) {
      let result = "<option selected disabled>0</option>";
      for( let i=1; i <= max; i++) {
        result += `<option value="num${i}">${i}</option>`;
      }
      return {__html: result};
    }

  render() {
    return (
      <div>
      <div className="border"></div>
      <Grid>
        <h3>Book Your Wedding</h3>
        <h4>Select option for your custom wedding package</h4>
        <form action="">
          <div className="form-group">
            <label>Choose a Date</label>
            <Datepicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              className="form-control" />
          </div>

          <div className="form-group">
            <label>Number of Guests</label>
            <select className="form-control sm-select" 
            dangerouslySetInnerHTML={this.renderOptions(200)}>
            </select>
          </div>

          <div className="form-group">
            <label>Ceremony Location</label>
            <select className="form-control sm-select">
              <option selected disabled>Select Location...</option>
              <option value="option1">Highland Hall - 4 hours</option>
              <option value="option2">The Highland Wedding Chapel - 3 hours</option>
               <option value="option2">The Highland Wedding Chapel w/prep suite - 3 hours</option>
            </select>
          </div>

          <div className="form-group">
            <label>Additional Hours for Ceremony</label>
            <select className="form-control sm-select">
              <option selected>0</option>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
            </select>
          </div>

          <div className="form-group">
            <label>Reception Location</label>
            <select className="form-control sm-select">
              <option selected disabled>Select Location...</option>
              <option value="option1">Highland Hall - all day</option>
              <option>Garden Room - all day</option>
              <option>Community Room - 8 hrs</option>
            </select>
          </div>

          <div className="form-group">
            <label>Additional Hours for Ceremony</label>
            <select className="form-control sm-select">
              <option selected>0</option>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
            </select>
          </div>

          <div className="total">Total: $0000.00</div>
          <button type="button" className="btn btn-default">Continue</button>
        </form>
      </Grid>
      
      </div>
    );
  }
}

export default CustomBookingRoute;
