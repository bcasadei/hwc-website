import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/pricing">Pricing</Link></li>
        <li><Link to="/booking">Book Your Wedding</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      <span className="copyright">© 2017 The Highland Wedding Chapel</span>
    </div>
  );
}

export { Footer };
