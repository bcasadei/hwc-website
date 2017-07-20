import React from 'react';
import { Link } from 'react-router-dom';

const Branding = () => {
  return (
      <div className="brand">
        <Link to="/">
          <div className="logo"></div>
        </Link>
          <h1>
            <Link to="/">
              The Highland Wedding Chapel
            </Link>
          </h1>
        
      </div>
  );
}

export { Branding };
