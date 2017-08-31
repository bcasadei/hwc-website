import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class GalleryRoute extends Component {
  constructor() {
    super();
    this.state = {
      galleryImages: []
    }
  }

  componentDidMount() {
    let dataURL = "https://highlandweddingchapel.com/api/wp-json/wp/v2/media?parent=13&type=attachment&per_page=100";

    fetch(dataURL)
      .then(res => res.json())
      .then(res => {

        let result = res.map((obj) => {
          return {
            original: obj.media_details.sizes.full.source_url,
            thumbnail: obj.media_details.sizes.thumbnail.source_url
          }
        });
      

        this.setState({
          galleryImages: result
        })
      });
  }

  render () {
    return (
      <div>
        <div className="border"></div>
        <div className="container">
          <h3>Photo Gallery</h3>
          <ImageGallery
            items={this.state.galleryImages}
            slideDuration={50}
            slideInterval={5000}/>
        </div>
      </div>
    );
  }
}

export default GalleryRoute;
