import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerActive: false
    };

    this.onHamburgerClick = this.onHamburgerClick.bind(this);
  }

  onHamburgerClick() {
    this.setState((prevState) => {
      return {
        hamburgerActive: !prevState.hamburgerActive
      };
    });
  }

  render() {
    return (
      <div className="wrapper-component-header wrapper">
        {this.state.hamburgerActive ? (
          <button className="hamburger active" onClick={this.onHamburgerClick}>
            &times;
          </button>
        ) : (
          <button className="hamburger" onClick={this.onHamburgerClick}>
            &#9776;
          </button>
        )}

        <ul className={`wrapper ${this.state.hamburgerActive ? 'active' : ''}`}>
          <li>
            <NavLink to="/" className="nav-link-home" onClick={this.onHamburgerClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/details" activeClassName="active" onClick={this.onHamburgerClick}>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/lodging" activeClassName="active" onClick={this.onHamburgerClick}>
              Lodging
            </NavLink>
          </li>
          <li>
            <NavLink to="/rsvp" activeClassName="active" onClick={this.onHamburgerClick}>
              RSVP
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={this.onHamburgerClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
