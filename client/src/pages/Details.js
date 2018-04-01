import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Details = () => {
  return (
    <PageTemplate>
      <div className="wrapper-page-details">
        <h2>You're invited to our wedding on August 4, 2018</h2>

        <p className="start-time">Ceremony 6:00PM</p>

        <div className="wrapper-address">
          <p>RedCrest Golf Course</p>
          <p>17700 Keele Street</p>
          <p>King City, ON L7B 0G7</p>
        </div>
      </div>

      <div className="wrapper-button">
        <a className="button" href="https://goo.gl/maps/VbjobyqyiUy" target="_blank" rel="noopener noreferrer">
          Directions
        </a>
      </div>
    </PageTemplate>
  );
};

export default Details;
