import React from 'react';
import { Grid, Row, Col, Glyphicon, Button } from 'react-bootstrap';

const NewsSignup = () => {
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
            <h5>Stay in Touch</h5>
            <p>Join our mailing list to stay up-to-date with everything we have going on!</p>
          </Col>

          <Col xs={12} sm={3}>
          <Button>Sign Up</Button>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}

export { NewsSignup };
