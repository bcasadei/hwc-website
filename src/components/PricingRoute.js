import React from 'react';
import image1 from '../images/highland_hall.jpg';
import image2 from '../images/highland_chapel.jpg';

const PricingRoute = () => {
  return (
    <div>
    <div className="border"></div>
    <div className=" container pricing">
      <h3>Pricing</h3>
      <h3 className="sub-head">Wedding Ceremony & Reception</h3>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
         
            <img className="one-col-img img-responsive" src={image1} alt="Highland Hall wedding" />
     
          <h4>Julian Pavilion</h4>
          <h5>Ceremony</h5>
          <h6>Highland Hall</h6>
            200 auditorium seating
            <ul>
              <li>4 Hours $800</li>
              <li>Each Additional Hours $75</li>
            </ul>
            <em>$300.00 damage deposit due upon contract signing</em>
            <h5>Reception</h5>
            <h6>Highland Hall</h6>
            120 table seating
            <ul>
              <li>All Day Use $1,200</li>
              <li>Add Kitchen $15</li>
            </ul>
            <em>$500.00 damage deposit due upon contract signing</em>
            <h6>Garden Room</h6>
            96 table seating
            <ul>
              <li>All Day Access $600</li>
              <li>Add Kitchen $15</li>
            </ul>
            <em>$250.00 damage deposit due upon contract signing</em>
        </div>

        <div className="col-xs-12 col-sm-6">
        <img className="one-col-img img-responsive" src={image2} alt="Highland Chapel interior" />
          <h4>Heritage Pavilion</h4>
          <h5>Ceremony</h5>
          <h6>The Highland Wedding Chapel</h6>
          60 pew seating
          <ul>
            <li>3 Hours $500</li>
            <li>3 Hours – Includes use of Preparation Suite $600</li>
            <li>Each additional hour $75</li>
          </ul>
          <em>$250.00 damage deposit due upon contract signing</em>
          <h5>Reception</h5>
          <h6>Community Room</h6>
          50 table seating
          <ul>
            <li>8 Hours $400</li>
            <li>Each Additional Hour $75</li>
          </ul>
          <em>$200.00 damage deposit due upon contract signing</em>
        </div>
      </div>
      <h3 className="sub-head">Wedding Packages</h3>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <h4>Heritage Pavilion $900</h4>
          <h6>The Highland Wedding Chapel & Community Room</h6>
          <ul>
            <li>3 Hours in the Chapel with use of Preparation Suite</li>
            <li>8 Hours in the Community Room</li>
          </ul>
          <em>$400.00 damage deposit due upon contract signing</em>
          <h4>The Chapel & The Hall $1,200</h4>
          <h6>The Highland Wedding Chapel & Highland Hall</h6>
          <ul>
            <li>3 Hours in the Chapel with use of Preparation Suit</li>
            <li>All day use of Highland Hall</li>
            <li>Includes use of kitchen</li>
          </ul>
          <em>$500.00 damage deposit due upon contract signing</em>
          <h4>Julian Pavilion $1,500</h4>
          <h6>Highland Hall & the Garden Room</h6>
          <ul>
            <li>All day use of Highland Hall and The Garden Room</li>
            <li>Includes use of kitchen</li>
          </ul>
          <em>$500.00 damage deposit due upon contract signing</em>
        </div>

        <div className="col-xs-12 col-sm-6">
        <h4>Heritage Pavilion & Highland Hall $1,600</h4>
        <h6>The Highland Wedding Chapel, Community Room, & Highland Hall</h6>
        <ul>
          <li>3 Hours in the Chapel with use of Preparation Suite</li>
          <li>8 Hours in the Community Room</li>
          <li>All day use of Highland Hall</li>
          <li>Includes use of kitchen</li>
        </ul>
        <em>$500.00 damage deposit due upon contract signing</em>
        <h4>The Chapel & Julian Pavilion $2,000</h4>
        <h6>The Highland Wedding Chapel, Highland Hall, & the Garden Room</h6>
        <ul>
          <li>3 Hours in the Chapel with use of Preparation Suite</li>
          <li>All day use of Highland Hall and Garden Room</li>
          <li>Includes use of kitchen</li>
        </ul>
          <em>$500.00 damage deposit due upon contract signing</em>
        </div>
       
      </div>
      <div className="foot-note">
       <em>Additional Usage: $75/Hour</em>
      </div>
    </div>
    </div>
  );
}

export default PricingRoute;
