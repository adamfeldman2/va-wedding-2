import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerActive: false
    };

    this.onHamburgerClick = this.onHamburgerClick.bind(this);
    this.onNavLinkClick = this.onNavLinkClick.bind(this);
  }

  onHamburgerClick() {
    this.setState((prevState) => {
      return {
        hamburgerActive: !prevState.hamburgerActive
      };
    });
  }

  onNavLinkClick() {
    this.setState(() => {
      return {
        hamburgerActive: false
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
            <NavLink to="/" className="nav-link-home" onClick={this.onNavLinkClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/details" activeClassName="active" onClick={this.onNavLinkClick}>
              Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/lodging" activeClassName="active" onClick={this.onNavLinkClick}>
              Lodging
            </NavLink>
          </li>
          <li>
            <NavLink to="/rsvp" activeClassName="active" onClick={this.onNavLinkClick}>
              RSVP
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active" onClick={this.onNavLinkClick}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
