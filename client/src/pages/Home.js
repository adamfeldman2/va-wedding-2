import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from '../components/Countdown';
import Confetti from 'react-dom-confetti';

const confettiConfig = {
  angle: 85,
  spread: 65,
  startVelocity: 20,
  elementCount: 120,
  decay: 0.95
};

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { confetti: true };

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

  render() {
    return (
      <div className="wrapper-page-home">
        <Link to="/" className="wrapper-content-home">
          <h1>VIVIANA &amp; ADAM</h1>
          <h5>August 4, 2018</h5>
          <Countdown endDate={'August 4, 2018 18:00'} />
        </Link>

        <div className="wrapper-confetti">
          <button className="button" onClick={this.shootConfetti}>
            Confetti
            <Confetti active={this.state.confetti} config={confettiConfig} />
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
