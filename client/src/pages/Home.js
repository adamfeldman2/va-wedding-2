import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';

const Home = () => {
  return (
    <div className="wrapper-page-home">
      <Link to="/" className="wrapper-content-home">
        <h1>Viviana &amp; Adam</h1>
        <h5>August 4, 2018</h5>
        <Countdown endDate={'August 4, 2018 18:00'} />
      </Link>
      <Link className="button-rsvp" to="/rsvp">
        RSVP Now
      </Link>
    </div>
  );
};

export default Home;
