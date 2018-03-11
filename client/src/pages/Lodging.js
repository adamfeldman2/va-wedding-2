import React from 'react';
import PageTemplate from '../components/PageTemplate';
import kingbridge from '../assets/images/kingbridge.png';
import bw from '../assets/images/bw.png';

const Lodging = () => {
  return (
    <PageTemplate>
      <div className="wrapper-page-lodging">
        <div className="kingbridge hotel">
          <img className="kingbridge-logo" src={kingbridge} alt="Kingbridge" />
          <p>$$$</p>
          <p>12750 Jane Street</p>
          <p>King City, ON L7B 1A3</p>
          <p className="hotel-number">
            <a href="tel:905-833-3086">905-833-3086</a>
          </p>
          <p>
            <a
              href="http://kingbridgecentre.com/conferences/guest-rooms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </p>
          <div className="wrapper-button">
            <a
              href="https://goo.gl/maps/xScV41TyAy52"
              target="_blank"
              rel="noopener noreferrer"
              className="button hotel-map"
            >
              Map
            </a>
          </div>
        </div>

        <div className="bw hotel">
          <img className="bw-logo" src={bw} alt="Best Western" />
          <p>$$</p>
          <p>17565 Yonge Street</p>
          <p>Newmarket, ON L3Y 5H6</p>
          <p className="hotel-number">
            <a href="tel:905-895-2131">905-895-2131</a>
          </p>
          <p>
            <a
              href="https://www.bestwestern.com/en_US/book/hotel-rooms.66065.html?checkIn=2017-11-26&checkOut=2017-11-27&iata=00170240&rateCode=RACK&adults=2&ssob=MTPBM0004G&cid=MTPBM0004G:google:hpa:66065&"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </p>
          <div className="wrapper-button">
            <a
              href="https://goo.gl/maps/skHqrJKoavS2"
              target="_blank"
              rel="noopener noreferrer"
              className="button hotel-map"
            >
              Map
            </a>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Lodging;
