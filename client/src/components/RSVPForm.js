import React from 'react';
import axios from 'axios';

class RSVPForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      g1First: '',
      g1Last: '',
      attending: null,
      numAttending: 1,
      g1Dinner: null,
      g1Dietary: '',
      g2First: '',
      g2Last: '',
      g2Dinner: null,
      g2Dietary: '',
      message: ''
    };
  }

  onG1FirstChange(e) {
    const g1First = e.target.value;
    this.setState(() => {
      return {
        g1First
      };
    });
  }

  onG1LastChange(e) {
    const g1Last = e.target.value;
    this.setState(() => {
      return {
        g1Last
      };
    });
  }

  onAttendingChange(e) {
    const attending = e.target.value;
    this.setState(() => {
      return {
        attending
      };
    });
  }

  onNumAttendingChange(e) {
    const numAttending = e.target.value;
    this.setState(() => {
      return {
        numAttending
      };
    });
  }

  onG1DinnerChange(e) {
    const g1Dinner = e.target.value;
    this.setState(() => {
      return {
        g1Dinner
      };
    });
  }

  onG1DietaryChange(e) {
    const g1Dietary = e.target.value;
    this.setState(() => {
      return {
        g1Dietary
      };
    });
  }

  onG2FirstChange(e) {
    const g2First = e.target.value;
    this.setState(() => {
      return {
        g2First
      };
    });
  }

  onG2LastChange(e) {
    const g2Last = e.target.value;
    this.setState(() => {
      return {
        g2Last
      };
    });
  }

  onG2DinnerChange(e) {
    const g2Dinner = e.target.value;
    this.setState(() => {
      return {
        g2Dinner
      };
    });
  }

  onG2DietaryChange(e) {
    const g2Dietary = e.target.value;
    this.setState(() => {
      return {
        g2Dietary
      };
    });
  }

  onMessageChange(e) {
    const message = e.target.value;
    this.setState(() => {
      return {
        message
      };
    });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('State: ', this.state);
    axios.post('/api/rsvp', this.state);
  }

  render() {
    return (
      <form
        className="wrapper-component-rsvp-form"
        onSubmit={(e) => this.onSubmit(e)}
      >
        <div className="wrapper-question">
          <label htmlFor="g1First">First Name</label>
          <input
            type="text"
            id="g1First"
            onChange={(e) => this.onG1FirstChange(e)}
          />
          <label htmlFor="g1Last">Last Name</label>
          <input
            type="text"
            id="g1Last"
            onChange={(e) => this.onG1LastChange(e)}
          />
        </div>

        <div className="wrapper-question">
          <label htmlFor="attending">Will You Be Attending?</label>
          <div
            onChange={(e) => {
              this.onAttendingChange(e);
            }}
          >
            <input id="radio-yes" type="radio" name="attending" value={true} />
            <label htmlFor="radio-yes">
              Yes<span className="radio-heart" />
            </label>
            <input id="radio-no" type="radio" name="attending" value={false} />
            <label htmlFor="radio-no">
              No<span className="radio-heart" />
            </label>
          </div>
        </div>

        <div className="wrapper-question">
          <label htmlFor="attending">How Many People In Your Party?</label>
          <div
            onChange={(e) => {
              this.onNumAttendingChange(e);
            }}
          >
            <input id="radio-1" type="radio" name="numAttending" value="1" />
            <label htmlFor="radio-1">
              Just Myself<span className="radio-heart" />
            </label>
            <input id="radio-2" type="radio" name="numAttending" value="2" />
            <label htmlFor="radio-2">
              Myself + 1<span className="radio-heart" />
            </label>
          </div>
        </div>

        <div className="wrapper-question">
          <label htmlFor="attending">What Would You Like For Dinner?</label>
          <div
            onChange={(e) => {
              this.onG1DinnerChange(e);
            }}
          >
            <input
              id="radio-chicken-beef-1"
              type="radio"
              name="g1Dinner"
              value="chicken/beef"
            />
            <label htmlFor="radio-chicken-beef-1">
              Chicken/Beef<span className="radio-heart" />
            </label>
            <input
              id="radio-salmon-1"
              type="radio"
              name="g1Dinner"
              value="salmon"
            />
            <label htmlFor="radio-salmon-1">
              Salmon<span className="radio-heart" />
            </label>
            <input
              id="radio-veg-1"
              type="radio"
              name="g1Dinner"
              value="vegetarian"
            />
            <label htmlFor="radio-veg-1">
              Vegetarian<span className="radio-heart" />
            </label>
          </div>
        </div>

        <div className="wrapper-question">
          <label htmlFor="g1Dietary">
            Your Dietary Restrictions (Optional):
          </label>
          <input
            type="text"
            id="g1Dietary"
            onChange={(e) => this.onG1DietaryChange(e)}
          />
        </div>

        <div className="wrapper-question">
          <label htmlFor="g2First">Guest's First Name</label>
          <input
            type="text"
            id="g2First"
            onChange={(e) => this.onG2FirstChange(e)}
          />
          <label htmlFor="g2Last">Guest's Last Name</label>
          <input
            type="text"
            id="g2Last"
            onChange={(e) => this.onG2LastChange(e)}
          />
        </div>

        <div className="wrapper-question">
          <label htmlFor="attending">
            What Would {this.state.g2First ? this.state.g2First : 'Your Guest'}{' '}
            Like For Dinner?
          </label>
          <div
            onChange={(e) => {
              this.onG2DinnerChange(e);
            }}
          >
            <input
              id="radio-chicken-beef-2"
              type="radio"
              name="g2Dinner"
              value="chicken/beef"
            />
            <label htmlFor="radio-chicken-beef-2">
              Chicken/Beef<span className="radio-heart" />
            </label>
            <input
              id="radio-salmon-2"
              type="radio"
              name="g2Dinner"
              value="salmon"
            />
            <label htmlFor="radio-salmon-2">
              Salmon<span className="radio-heart" />
            </label>
            <input
              id="radio-veg-2"
              type="radio"
              name="g2Dinner"
              value="vegetarian"
            />
            <label htmlFor="radio-veg-2">
              Vegetarian<span className="radio-heart" />
            </label>
          </div>
        </div>

        <div className="wrapper-question">
          <label htmlFor="g2Dietary">
            {this.state.g2First ? this.state.g2First : 'Your Guest'}'s Dietary
            Restrictions (Optional):
          </label>
          <input
            type="text"
            id="g2Dietary"
            onChange={(e) => this.onG2DietaryChange(e)}
          />
        </div>

        <div className="wrapper-question">
          <label htmlFor="message">Message (Optional):</label>
          <textarea
            cols="30"
            rows="5"
            onChange={(e) => this.onMessageChange(e)}
          />
          <button className="button-style">Submit</button>
        </div>
      </form>
    );
  }
}

export default RSVPForm;
