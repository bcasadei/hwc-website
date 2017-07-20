import React from 'react';
import { 
  FormGroup, 
  FormControl,
  ControlLabel, 
  Button 
} from 'react-bootstrap';

const ContactForm = () => {
  return (
    <form>
      <FormGroup>
        <ControlLabel>First Name</ControlLabel>
        <FormControl
          type="text"
          placeholder="First Name" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Last Name</ControlLabel>
        <FormControl
          type="text"
          placeholder="Last Name" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Phone Number</ControlLabel>
        <FormControl
          type="text"
          placeholder="555 555 5555" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Email Address</ControlLabel>
        <FormControl
          type="text"
          placeholder="yourname@gmail.com" />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Message</ControlLabel>
        <textarea className="form-control" rows="3" id="messsage"></textarea>
      </FormGroup>

      <Button>Submit</Button>
    </form>
  );
}

export default ContactForm;