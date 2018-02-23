import React from 'react';
import PageTemplate from '../components/PageTemplate';

class RSVP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      guest1First: '',
      guest1Last: '',
      attending: null,
      guest1Dinner: null,
      guest1Dietary: '',
      guest2First: '',
      guest2Last: '',
      guest2Dinner: null,
      guest2Dietary: '',
      comment: ''
    };
  }

  render() {
    return (
      <PageTemplate>
        <div className="wrapper-page-rsvp">
          <h2>Please RSVP by May 31, 2018</h2>
          <form>
            <label htmlFor="g1First">First Name</label>
            <input type="text" id="g1First" />

            <label htmlFor="g1Last">Last Name</label>
            <input type="text" id="g1Last" />
          </form>
        </div>
      </PageTemplate>
    );
  }
}

export default RSVP;
