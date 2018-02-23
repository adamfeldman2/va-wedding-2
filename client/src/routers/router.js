import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Lodging from '../pages/Lodging';
import RSVP from '../pages/RSVP';
import Contact from '../pages/Contact';
import FourOhFour from '../pages/FourOhFour';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/lodging" component={Lodging} />
          <Route exact path="/rsvp" component={RSVP} />
          <Route exact path="/contact" component={Contact} />
          <Route component={FourOhFour} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Router;
