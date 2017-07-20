import React from 'react';
import { Grid } from 'react-bootstrap';
import image1 from '../images/highland_chapel_ext.jpg';

const AboutRoute = () => {
  return (
    <div>
    <div className="border"></div>
      <Grid>
        <h3>About Us</h3>
        <h4>Our Values & Mission</h4>
        <p>
          Art, Spirit, Celebration. The Highlands Center is a home for social change makers who want to maximize their impact and improve quality of life locally and globally. We provide the infrastructure, programs and support to make conscious personal, lifestyle, and social change happen.
        </p>
        <h4>Wedding Venues</h4>
        <div className="media-border pull-right">
          <img className="media-image" src={image1} alt="The Highland Chapel Exterior" />
        </div>
        <p>
          Situated on the edge of the Historic Ghost District is the West Highland neighborhood of North Denver, The Highland Wedding Chapel is the perfect location for your intimate urban wedding. The venue consists of two buildings, the Heritage Pavilion and the Julian Pavilion.
        </p>

        <p>
          The Heritage Pavilion is a beautiful historic church built in the late 1890’s. It consists of two wonderful spaces, the Chapel and the Community Room. With traditional pew seating for 70 and a spectacular stained-glass window, the Chapel is uniquely suited for small, traditional, and affordable weddings. Adjacent to this historic chapel is the Community Room for seamless guest access from the ceremony to the reception and is the perfect spot for a more intimate gathering.
        </p>

        <p>
          The Julian Pavilion, the main event building, is a large mid-century structure with two large hall’s, Highland Hall and the Garden Room.  The Highland Hall can be set up for ceremonies and receptions with the ability to accommodate between 120-200 guests.  Located just below Highland Hall sits the Garden Room.  The Garden Room is an ideal space for a cocktail hour or reception.
        </p>

        <p>
          The Highlands Center is an inclusive and welcoming location that will allow you and your guests to feel relaxed, comfortable and welcome as you join together to celebrate your love. Gather your family and friends and come celebrate the most romantic day of your life at The Highland Wedding Center.
        </p>
      </Grid>
    </div>
  );
}

export default AboutRoute;
