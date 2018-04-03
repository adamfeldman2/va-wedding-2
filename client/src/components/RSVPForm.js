import React from 'react';
import axios from 'axios';
import Confetti from 'react-dom-confetti';

const confettiConfig = {
  angle: 85,
  spread: 65,
  startVelocity: 20,
  elementCount: 120,
  decay: 0.95
};

class RSVPForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      g1First: '',
      g1Last: '',
      attending: '',
      numAttending: '',
      g1Dinner: '',
      g1Dietary: '',
      g2First: '',
      g2Last: '',
      g2Dinner: '',
      g2Dietary: '',
      message: '',
      loading: false,
      sent: false,
      confetti: true
    };

    this.shootConfetti = this.shootConfetti.bind(this);
  }

  shootConfetti() {
    setTimeout(() => {
      this.setState(() => {
        return {
          confetti: false
        };
      });
    }, 2);

    setTimeout(() => {
      this.setState(() => {
        return {
          confetti: true
        };
      });
    }, 10);
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

  async onSubmit(e) {
    e.preventDefault();

    this.setState(() => {
      return {
        loading: true
      };
    });

    try {
      const res = await axios.post('/api/rsvp', {
        g1First: this.state.g1First,
        g1Last: this.state.g1Last,
        attending: this.state.attending,
        numAttending: this.state.numAttending,
        g1Dinner: this.state.g1Dinner,
        g1Dietary: this.state.g1Dietary,
        g2First: this.state.g2First,
        g2Last: this.state.g2Last,
        g2Dinner: this.state.g2Dinner,
        g2Dietary: this.state.g2Dietary,
        message: this.state.message
      });

      // allow 3s for user to watch confetti
      setTimeout(() => {
        this.setState(() => {
          return {
            formError: false,
            sent: res.data.success,
            loading: false
          };
        });
      }, 3000);
    } catch (err) {
      this.setState(() => {
        return {
          loading: false,
          sent: false
        };
      });
    }
  }

  render() {
    return (
      <div className={`wrapper-component-rsvp-form ${this.state.sent ? 'sent' : ''}`}>
        <h2>{this.state.sent ? 'RSVP Received!' : 'Please RSVP by May 31, 2018'}</h2>

        {this.state.sent ? (
          <div className="wrapper-rsvp-sent-content">
            {this.state.attending === 'true'
              ? `Thanks ${this.state.g1First}! We'll see you ${this.state.g2First &&
                  `and ${this.state.g2First}`} on August 4th 🎉`
              : `Thanks ${this.state.g1First}. We'll miss you, but we understand.`}
          </div>
        ) : (
          <form className="wrapper-component-rsvp-form" onSubmit={(e) => this.onSubmit(e)}>
            {/* G1 First Name */}
            <div className="wrapper-question">
              <div className="wrapper-horizontal-questions">
                <div className="wrapper-horizontal-question">
                  <label htmlFor="g1First">First Name</label>
                  <input type="text" id="g1First" onChange={(e) => this.onG1FirstChange(e)} />
                </div>
                {/* G1 Last Name */}
                <div className="wrapper-horizontal-question">
                  <label htmlFor="g1Last">Last Name</label>
                  <input type="text" id="g1Last" onChange={(e) => this.onG1LastChange(e)} />
                </div>
              </div>
            </div>

            {/* Attending */}
            <div className="wrapper-question wrapper-radio-buttons-outer">
              <label htmlFor="attending">Will You Be Attending?</label>
              <div
                className="wrapper-radio-buttons-inner"
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

            {this.state.attending === 'true' && (
              <div>
                {/* Num People? */}
                <div className="wrapper-question wrapper-radio-buttons-outer">
                  <label htmlFor="numPeople">How Many People In Your Party?</label>
                  <div
                    className="wrapper-radio-buttons-inner"
                    onChange={(e) => {
                      this.onNumAttendingChange(e);
                    }}
                  >
                    <input id="radio-1" type="radio" name="numPeople" value="1" />
                    <label htmlFor="radio-1">
                      Just Myself<span className="radio-heart" />
                    </label>
                    <input id="radio-2" type="radio" name="numPeople" value="2" />
                    <label htmlFor="radio-2">
                      Myself + 1<span className="radio-heart" />
                    </label>
                  </div>
                </div>

                {/* G1 Dinner */}
                <div className="wrapper-question wrapper-radio-buttons-outer">
                  <label htmlFor="g1Dinner">What Would You Like For Dinner?</label>
                  <div
                    className="wrapper-radio-buttons-inner"
                    onChange={(e) => {
                      this.onG1DinnerChange(e);
                    }}
                  >
                    <input id="radio-chicken-beef-1" type="radio" name="g1Dinner" value="chicken/beef" />
                    <label htmlFor="radio-chicken-beef-1">
                      Chicken/Beef<span className="radio-heart" />
                    </label>
                    <input id="radio-salmon-1" type="radio" name="g1Dinner" value="salmon" />
                    <label htmlFor="radio-salmon-1">
                      Salmon<span className="radio-heart" />
                    </label>
                    <input id="radio-veg-1" type="radio" name="g1Dinner" value="vegetarian" />
                    <label htmlFor="radio-veg-1">
                      Vegetarian<span className="radio-heart" />
                    </label>
                  </div>
                </div>

                {/* G1 Dietary */}
                <div className="wrapper-question">
                  <label htmlFor="g1Dietary">Your Dietary Restrictions (Optional):</label>
                  <input type="text" id="g1Dietary" onChange={(e) => this.onG1DietaryChange(e)} />
                </div>

                {this.state.numAttending === '2' && (
                  <div>
                    {/* G2 First Name */}
                    <div className="wrapper-question">
                      <div className="wrapper-horizontal-questions">
                        <div className="wrapper-horizontal-question">
                          <label htmlFor="g2First">Guest's First Name</label>
                          <input type="text" id="g2First" onChange={(e) => this.onG2FirstChange(e)} />
                        </div>
                        {/* G2 Last Name */}
                        <div className="wrapper-horizontal-question">
                          <label htmlFor="g2Last">Guest's Last Name</label>
                          <input type="text" id="g2Last" onChange={(e) => this.onG2LastChange(e)} />
                        </div>
                      </div>
                    </div>

                    {/* G2 Dinner */}
                    <div className="wrapper-question wrapper-radio-buttons-outer">
                      <label htmlFor="g2Dinner">
                        What Would {this.state.g2First ? this.state.g2First : 'Your Guest'} Like For Dinner?
                      </label>
                      <div
                        className="wrapper-radio-buttons-inner"
                        onChange={(e) => {
                          this.onG2DinnerChange(e);
                        }}
                      >
                        <input id="radio-chicken-beef-2" type="radio" name="g2Dinner" value="chicken/beef" />
                        <label htmlFor="radio-chicken-beef-2">
                          Chicken/Beef<span className="radio-heart" />
                        </label>
                        <input id="radio-salmon-2" type="radio" name="g2Dinner" value="salmon" />
                        <label htmlFor="radio-salmon-2">
                          Salmon<span className="radio-heart" />
                        </label>
                        <input id="radio-veg-2" type="radio" name="g2Dinner" value="vegetarian" />
                        <label htmlFor="radio-veg-2">
                          Vegetarian<span className="radio-heart" />
                        </label>
                      </div>
                    </div>

                    {/* G2 Dietary */}
                    <div className="wrapper-question">
                      <label htmlFor="g2Dietary">
                        {this.state.g2First ? this.state.g2First : 'Your Guest'}'s Dietary Restrictions (Optional):
                      </label>
                      <input type="text" id="g2Dietary" onChange={(e) => this.onG2DietaryChange(e)} />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Message */}
            <div className="wrapper-question">
              <label htmlFor="message">Message:</label>
              <textarea cols="30" rows="5" onChange={(e) => this.onMessageChange(e)} />

              {(this.state.attending === 'false' ||
                ((this.state.numAttending === '1' && this.state.g1Dinner) ||
                  (this.state.numAttending === '2' && this.state.g2Dinner))) && (
                <div className="wrapper-confetti wrapper-button">
                  <button className="button" onClick={this.shootConfetti}>
                    {this.state.loading ? 'Sending...' : 'Submit'}
                    <Confetti active={this.state.confetti} config={confettiConfig} />
                  </button>
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    );
  }
}

export default RSVPForm;
