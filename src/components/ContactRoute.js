import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm';

const ContactRoute = () => {
  const MAP_URL = 'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOV1kdGKHa4cRBDR785MA8kk&key=';
  const API_KEY = 'AIzaSyDp6YEfTBaRYpK9fsSNxYhsqF5_Pl224AY';

  return (
    <div>
    <div className="border"></div>
    <Grid>
    <h3>Contact Us</h3>
      <Row>
        <Col xs={12} sm={6}>
          <p>Please feel free to contact the Event Coordinator with any questions with regard to the event center.</p>

          <h4>Highland Event Center</h4>
          <p>3401 W. 29th Avenue<br />
          Denver, Colorado 80211<br />
          phone: 303-433-7131</p>

          <ContactForm />
        </Col>
        <Col xs={12} sm={6}>
          <iframe title="contact-map" className="contact-map" frameBorder="0" src={MAP_URL + API_KEY}></iframe>
        </Col>
      </Row>
    </Grid>
    
    </div>
  );
}

export default ContactRoute;
