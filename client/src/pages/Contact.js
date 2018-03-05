import React from 'react';
import PageTemplate from '../components/PageTemplate';

const Contact = () => {
  return (
    <PageTemplate>
      <div className="wrapper-page-contact">
        <h2>
          If you have any questions, please don't hesitate to get in touch with
          us:
        </h2>
        <div className="wrapper-content">
          <div className="wrapper-viv">
            <h3>Viviana</h3>
            <p>viviana.gallant@gmail.com</p>
            <a href="tel:647-537-6777">647-537-6777</a>
          </div>

          <div className="wrapper-adam">
            <h3>Adam</h3>
            <p>feldman238@gmail.com</p>
            <a href="tel:647-860-6767">647-860-6767</a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Contact;
