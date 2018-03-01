import React from 'react';
import PageTemplate from '../components/PageTemplate';
import RSVPForm from '../components/RSVPForm';

const RSVP = () => {
  return (
    <PageTemplate>
      <div className="wrapper-page-rsvp">
        <h2>Please RSVP by May 31, 2018</h2>
        <RSVPForm />
      </div>
    </PageTemplate>
  );
};

export default RSVP;
