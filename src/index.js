import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

// Import Styles
// import 'bootstrap/dist/css/bootstrap-theme.css';
import './style/App.css'
import { 
  Branding, 
  Navigation, 
  NewsSignup, 
  Footer } 
  from './components/common';

// Import Routes
import IndexRoute from './components/IndexRoute';
import AboutRoute from './components/AboutRoute';
import GalleryRoute from './components/GalleryRoute';
import PricingRoute from './components/PricingRoute';
import BookingRoute from './components/BookingRoute';
import CustomBookingRoute from './components/CustomBookingRoute';
import ContactRoute from './components/ContactRoute';


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <HashRouter>
      <div>
        <Branding />
        <Navigation />
        <Switch>
          <Route path="/contact" component={ContactRoute} />
          <Route path="/booking/custom" component={CustomBookingRoute} />
          <Route path="/booking" component={BookingRoute} />
          <Route path="/pricing" component={PricingRoute} />
          <Route path="/gallery" component={GalleryRoute} />
          <Route path="/about" component={AboutRoute} />
          <Route path="/" component={IndexRoute} />
        </Switch>
        <NewsSignup />
        <Footer />
      </div>
    </HashRouter>
  </div>
  , document.getElementById('root'));
registerServiceWorker();
