import React from 'react';
import { Link } from 'react-router-dom';

const PageTemplate = (props) => {
  return (
    <div className="wrapper-component-page-template">
      <Link to="/" className="wrapper-page-template-title">
        <h1>Viviana &amp; Adam</h1>
        <h5>Are Getting Married</h5>
      </Link>
      <div className="wrapper-page-template-content-box box-wrapper">
        {props.children}
      </div>
    </div>
  );
};

export default PageTemplate;
