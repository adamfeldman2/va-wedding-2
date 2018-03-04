import React from 'react';
import PageTemplate from '../components/PageTemplate';
import RSVPForm from '../components/RSVPForm';

const RSVP = () => {
  return (
    <PageTemplate>
      <div className="wrapper-page-rsvp">
        <RSVPForm />
      </div>
    </PageTemplate>
  );
};

export default RSVP;
