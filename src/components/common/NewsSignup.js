import React, { Component } from 'react';
import axios from 'axios';
import { 
  Grid, 
  Row, 
  Col, 
  Glyphicon, 
  Button, 
  Modal,
  FormGroup,
  ControlLabel,
  FormControl,
  Checkbox } from 'react-bootstrap';

class NewsSignup extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      messageClass: '',
      message: '',
      firstName: '',
      lastName: '',
      email: '',
      list_0: true,
      list_1: true,
    }

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      messageClass: 'alert alert-info',
      message: 'Sending...'
    });

    const CC_AUTH = '3e650ee7-e75e-4f47-8bb3-01eefba3806e'

    var params = new URLSearchParams();
    params.append('ca', CC_AUTH);
    params.append('first_name', this.state.firstName);
    params.append('last_name', this.state.lastName);
    params.append('email', this.state.email);
    if(this.state.list_0) {
      params.append('list_0', "1217278066");
    }
    if (this.state.list_1) {
      params.append('list_1', "2087209694");
    }
    axios.post('https://visitor2.constantcontact.com/api/signup', params)
      .then((response) => {
        this.setState({
          messageClass: 'alert alert-success',
          message: 'You have successfully signed up. Thank you!',
          firstName: '',
          lastName: '',
          email: '',
          list_0: true,
          list_1: true,
        });
      })
      .catch((error) => {
        this.setState({
          messageClass: 'alert alert-danger',
          message: 'There has been an error. Please try again.'
        });
      });
  }

  render() {
    return (
      <div className="news-signup">
        <Grid>
          <Row>
            <Col xs={12} sm={2}>
              <div className="icon-circle">
                <Glyphicon glyph="envelope" />
              </div>
            </Col>

            <Col xs={12} sm={7}>
              <h5>Stay in Touch!</h5>
              <p>Join our mailing list to stay up-to-date with everything we have going on!</p>
            </Col>

            <Col xs={12} sm={3}>
              <Button onClick={this.open}>Sign Up</Button>
            </Col>
          </Row>
        </Grid>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Sign up to stay in touch!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Join our mailing list to get interesting news and updates delivered to your inbox.</p>
            <div id="form-messages" className={this.state.messageClass}>{this.state.message}</div>

            <form id="newsletter-signup" onSubmit={this.handleSubmit}>
              <FormGroup>
                <ControlLabel>First Name</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  required />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Last Name</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  required />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Email Address</ControlLabel>
                <FormControl
                  type="email"
                  placeholder="yourname@mail.com"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Email Lists</ControlLabel>
                <Checkbox
                  data-id="Lists:input" 
                  name="list_0" 
                  checked={this.state.list_0}
                  value="1217278066"
                  type="checkbox"
                  onChange={this.handleInputChange}>
                  The Highland Wedding Chapel
                </Checkbox>
                <Checkbox
                  data-id="Lists:input" 
                  name="list_1" 
                  checked={this.state.list_1} 
                  value="2087209694"
                  type="checkbox"
                  onChange={this.handleInputChange}>
                  The Highlands Center
                </Checkbox>
              </FormGroup>
              <p className="form-note">
                By submitting this form, you are granting: The Highland Wedding Chapel and The Highlands Center, 3401 W 29th Ave, Denver, Colorado, 80211, United States, permission to email you. You may unsubscribe via the link found at the bottom of every email.  (See our <a href="http://www.constantcontact.com/legal/privacy-statement" target="_blank" rel="noopener noreferrer">Email Privacy Policy</a> for details.) Emails are serviced by Constant Contact.
            </p>
              <Button type="submit">Submit</Button>
            </form>
            
          </Modal.Body>
          <Modal.Footer>
            
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export { NewsSignup };
