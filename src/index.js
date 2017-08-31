import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { HashRouter, Route, Switch } from 'react-router-dom';

// Import Styles
import 'bootstrap/dist/css/bootstrap.css';
import './style/App.css'

import reducers from './reducers';
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

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <HashRouter>
      <div className="container-fluid">
        <Branding />
        <Navigation />
          <Switch>
            <Route path="/booking/custom" component={CustomBookingRoute} />
            <Route path="/booking" component={BookingRoute} />
            <Route path="/contact" component={ContactRoute} />
            <Route path="/pricing" component={PricingRoute} />
            <Route path="/gallery" component={GalleryRoute} />
            <Route path="/about" component={AboutRoute} />
            <Route path="/" component={IndexRoute} />
          </Switch>
        <div className="footer-wrapper">
          <NewsSignup />
          <Footer />
        </div>
      </div>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
