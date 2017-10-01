import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContent } from '../actions'; 
import { Grid } from 'react-bootstrap';
import Spinner from 'react-spinkit';

class AboutRoute extends Component {
  createMarkup() {
    return { __html: this.props.pageContent };
  }

  componentDidMount() {
    const pageQuery = '/pages?slug=about-us';

    this.props.fetchContent(pageQuery);
  }

  render() {
    if(!this.props.pageContent) {
      return (
        <Spinner 
          name="line-spin-fade-loader"
          className="spinner"
          color="#1b798c"
        />
      )
    }

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

function mapStateToProps(state) {
  return { pageContent: state.pageContent };
}

export default connect(mapStateToProps, {fetchContent}) (AboutRoute);
