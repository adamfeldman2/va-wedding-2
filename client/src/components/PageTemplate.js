import React from 'react';
import { Link } from 'react-router-dom';

const PageTemplate = (props) => {
  return (
    <div className="wrapper-component-page-template">
      <Link to="/" className="wrapper-page-template-title">
        <h1>VIVIANA &amp; ADAM</h1>
        <h5>August 4, 2018</h5>
      </Link>
      <div className="wrapper-page-template-content-box box-wrapper">
        {props.children}
      </div>
    </div>
  );
};

export default PageTemplate;
