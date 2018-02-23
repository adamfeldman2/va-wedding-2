import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="wrapper-page-home">
      <Link to="/" className="wrapper-content-home">
        <h1>Viviana &amp; Adam</h1>
        <h5>Are Getting Married</h5>
      </Link>
    </div>
  );
};

export default Home;
