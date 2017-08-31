import React, { Component } from 'react';
import axios from 'axios';
import { 
  FormGroup, 
  FormControl,
  ControlLabel, 
  Button 
} from 'react-bootstrap';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      formMessages: '',
      contactName: '',
      contactPhone: '',
      contactEmail: '',
      contactMessage: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      type: 'alert alert-info',
      formMessages: 'Sending...'
    });

    var params = new URLSearchParams();
    params.append('name', this.state.contactName);
    params.append('phone', this.state.contactPhone);
    params.append('email', this.state.contactEmail);
    params.append('message', this.state.contactMessage);
    axios.post('https://highlandweddingchapel.com/mailer.php', params)
      .then((response) => {
        let message = response.data

        this.setState({
          type: 'alert alert-success', 
          formMessages: message,
          contactName: '',
          contactPhone: '',
          contactEmail: '',
          contactMessage: ''
        });
      })
      .catch((error) => {
        let message = error.data

        this.setState({
          type: 'alert alert-danger', 
          formMessages: message
        });
      });
  }

  render() {
    return (
      <div>
        <div id="form-messages" className={this.state.type}>{this.state.formMessages}</div>
        <form id="ajax-contact" onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter Your Name"
              name="contactName"
              value={this.state.contactName}
              onChange={this.handleInputChange}
              required />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl
              type="text"
              placeholder="555 555 5555"
              name="contactPhone" 
              value={this.state.contactPhone}
              onChange={this.handleInputChange} />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Email Address</ControlLabel>
            <FormControl
              type="email"
              placeholder="yourname@mail.com"
              name="contactEmail"
              value={this.state.contactEmail}
              onChange={this.handleInputChange}
              required />
          </FormGroup>

          <FormGroup>
            <ControlLabel>Message</ControlLabel>
            <textarea 
              className="form-control" 
              rows="3" 
              name="contactMessage" 
              value={this.state.contactMessage}
              onChange={this.handleInputChange}
              required />
          </FormGroup>

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
