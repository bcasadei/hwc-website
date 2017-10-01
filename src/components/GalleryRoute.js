import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGallery } from '../actions';
import Spinner from 'react-spinkit';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class GalleryRoute extends Component {
  componentDidMount() {
    this.props.fetchGallery();
  }

  render () {
    if (!this.props.galleryImages) {
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
        <div className="container">
          <h3>Photo Gallery</h3>
          <ImageGallery
            items={this.props.galleryImages}
            slideDuration={50}
            slideInterval={5000}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { galleryImages: state.galleryImages };
}

export default connect(mapStateToProps, {fetchGallery}) (GalleryRoute);
