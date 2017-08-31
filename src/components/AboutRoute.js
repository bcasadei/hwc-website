import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

class AboutRoute extends Component {
  constructor() {
    super();
    this.state = {
      pageContent: ''
    }
  }

  createMarkup() {
    return { __html: this.state.pageContent };
  }

  componentDidMount() {
    let dataURL = "https://highlandweddingchapel.com/api/wp-json/wp/v2/pages?slug=about-us";

    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        const content = res[0].content.rendered;
        this.setState({
          pageContent: content
        })
      });
  }

  render() {
    return(
      <div >
        <div className="border"></div>
        <Grid>
          <div dangerouslySetInnerHTML={this.createMarkup()} />
        </Grid>
      </div>
    );
  }
  
}

export default AboutRoute;
