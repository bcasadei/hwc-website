import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Datepicker from 'react-datepicker';
import moment from 'moment';
import { Grid } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';


class BookingRoute extends Component {

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

  render() {
    return (
      <div>
      <div className="border"></div>
      <Grid>
        <h3>Book Your Wedding</h3>
        <h4>Check availability and reserve a venue</h4>
        <p><Link to="/pricing">Visit our Pricing page for details and pricing on each package</Link></p>
        <form action="">
          <div className="form-group">
            <label>Choose a Date</label>
            <Datepicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              className="form-control" />
          </div>

          <div className="form-group">
            <label>Choose a Wedding Package</label>
            <select className="form-control sm-select">
              <option selected disabled>Choose a Wedding Package...</option>
              <option value="option1">The Highland Wedding Chapel & Community Room</option>
              <option value="option2">The Highland Wedding Chapel & Highland Hall</option>
              <option value="option3">Highland Hall & the Garden Room</option>
              <option value="option4">The Highland Wedding Chapel, Community Room, & Highland Hall</option>
              <option value="option5">The Highland Wedding Chapel, Highland Hall, & the Garden Room</option>
            </select>
          </div>
          <div className="total">Total: $0000.00</div>
          <button type="button" className="btn btn-default">Continue</button>
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

export default BookingRoute;
