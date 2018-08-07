import React from 'react';

class CountDown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    };
  }

  componentDidMount() {
    // get time remaining
    this.getTimeRemaining(this.props.endDate);

    // update time remaining every 1 second
    this.interval = setInterval(() => {
      this.getTimeRemaining(this.props.endDate);
    }, 1000);
  }

  componentWillUnmount() {
    // clearInterval when component unmounts
    clearInterval(this.interval);
  }

  getTimeRemaining(endDate) {
    const now = Date.now();
    const weddingDate = Date.parse(endDate);
    const timeRemaining = weddingDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.ceil((timeRemaining % (1000 * 60)) / 1000);

    this.setState(() => {
      return {
        days,
        hours,
        minutes,
        seconds
      };
    });
  }

  render() {
    return (
      <div className="wrapper-countdown wrapper">
        <div className="married-for">Have been married for...</div>
        <div className="inner-wrapper-countdown">
          <div className="cell-wrapper-countdown days">
            <h3>Days</h3>
            <div>{Math.abs(this.state.days)}</div>
          </div>
          <div className="cell-wrapper-countdown hours">
            <h3>Hours</h3>
            <div>{Math.abs(this.state.hours)}</div>
          </div>
          <div className="cell-wrapper-countdown minutes">
            <h3>Minutes</h3>
            <div>{Math.abs(this.state.minutes)}</div>
          </div>
          <div className="cell-wrapper-countdown seconds">
            <h3>Seconds</h3>
            <div>{Math.abs(this.state.seconds)}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CountDown;
