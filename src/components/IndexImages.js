import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import image1 from '../images/interior@2x.png';
import image2 from '../images/pews@2x.png';
import image3 from '../images/exterior@2x.png';

const IndexImages = () => {
  return (
    <Grid fluid>
      <Row className="border"></Row>
      <Row>
        <Col xs={12} sm={4} className="main-image">
          <Image responsive src={image1} alt="Interior wedding photo"/>
        </Col>
        <Col xs={12} sm={4} className="main-image">
          <Image responsive src={image2} alt="Church pews"/>
        </Col>
        <Col xs={12} sm={4} className="main-image">
          <Image responsive src={image3} alt="Exterior wedding photo"/>
        </Col>
      </Row>
      <Row className="border"></Row>
    </Grid>
  );
}

export default IndexImages;
