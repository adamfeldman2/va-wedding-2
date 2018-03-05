import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="wrapper-component-header wrapper">
      <ul className="wrapper">
        <li>
          <NavLink to="/details" activeClassName="active">
            Details
          </NavLink>
        </li>
        <li>
          <NavLink to="/lodging" activeClassName="active">
            Lodging
          </NavLink>
        </li>
        <li>
          <NavLink to="/rsvp" activeClassName="active">
            RSVP
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
