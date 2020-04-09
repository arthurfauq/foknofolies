import React, { ReactElement } from 'react';

import backgroundSmallImg from '../img/background-small.png';
import backgrounBigImg from '../img/background-big.png';
import arthurImg from '../img/arthur.jpg';
import gaspardImg from '../img/gaspard.jpg';
import camilleImg from '../img/camille.jpg';

const Contact = (): ReactElement => {
  return (
    <>
      <img
        data-src={backgroundSmallImg}
        data-srcset={`${backgrounBigImg} 1100w`}
        className="background-image animated"
        alt=""
      />
      <div className="container-fluid flexbox">
        <div className="section-content">
          <h2>Contact</h2>
          <div className="contact-zone">
            <div className="description-zone">
              <img src={camilleImg} className="description-photo" alt="" />
              <div className="description-content">
                <p className="description-title">Camille Fauquenot</p>
                <p className="description-text">06 67 95 29 42</p>
              </div>
            </div>
            <div className="description-zone">
              <img src={gaspardImg} className="description-photo" alt="" />
              <div className="description-content">
                <p className="description-title">Gaspard Fauquenot</p>
                <p className="description-text">06 42 39 15 56</p>
              </div>
            </div>
            <div className="description-zone">
              <img src={arthurImg} className="description-photo" alt="" />
              <div className="description-content">
                <p className="description-title">Arthur Fauquenot</p>
                <p className="description-text">06 37 17 08 87</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
