import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import IndexImages from './IndexImages';
import values from '../images/values.png';
import gallery from '../images/gallery.png';
import save_date from '../images/save_date.png';

const IndexRoute = () => {
  return (
    <div>
    <IndexImages />
      <Grid>
        <Row>
          <h2><span className="color1">art.</span> <span className="color2">spirit.</span> <span className="color3"> celebration.</span></h2>
        </Row>

        <Row>
          <Col xs={12} sm={4} className="highlight">
            <Link to="/about">
              <div className="outer-circle"> 
                <Image circle className="highlight-circle" src={values} alt="Photo of stained glass window"/>
              </div>
              <span className="highlight-text color1">Our Values</span>
            </Link>
          </Col>

          <Col xs={12} sm={4} className="highlight">
            <Link to="/gallery">
              <div className="outer-circle border-color2"> 
                <Image circle className="highlight-circle border-color2" src={gallery} alt="Photo of stained glass window"/>
              </div>  
              <span className="highlight-text color2">Photo Gallery</span>
            </Link>
          </Col>

          <Col xs={12} sm={4} className="highlight">
            <Link to="/booking">
              <div className="outer-circle border-color3"> 
                <Image circle className="highlight-circle border-color3" src={save_date} alt="Photo of stained glass window"/>
              </div>
              <span className="highlight-text color3">Save a Date</span>
            </Link>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export default IndexRoute;
