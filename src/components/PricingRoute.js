import React, { Component } from 'react';

class PricingRoute extends Component {
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
    let dataURL = "https://highlandweddingchapel.com/api/wp-json/wp/v2/pages?slug=pricing";

    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        const content = res[0].content.rendered;
        console.log(content);
        this.setState({
          pageContent: content
        })
      });
  }

  render() {
    return (
      <div>
        <div className="border"></div>
        <div className=" container pricing">
          <div dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
      </div>
    );
  }
  
}

export default PricingRoute;
