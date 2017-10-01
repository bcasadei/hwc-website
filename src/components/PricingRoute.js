import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContent } from '../actions';
import Spinner from 'react-spinkit';

class PricingRoute extends Component {

  createMarkup() {
    return { __html: this.props.pageContent };
  }

  componentDidMount() {
    const pageQuery = '/pages?slug=pricing';

    this.props.fetchContent(pageQuery);
  }

  render() {
    if (!this.props.pageContent) {
      return (
        <Spinner
          name="line-spin-fade-loader"
          className="spinner"
          color="#1b798c"
        />
      )
    }

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

function mapStateToProps(state) {
  return { pageContent: state.pageContent }
}

export default connect(mapStateToProps, {fetchContent}) (PricingRoute);
