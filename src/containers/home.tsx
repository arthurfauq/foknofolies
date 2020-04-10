import React, { ReactElement } from 'react';

import backgroundReverseSmallImg from 'images/background-reverse-small.png';
import backgroundReverseBigImg from 'images/background-reverse-big.png';
import logoLines from 'images/logo-foknofolies-trace.png';

const Home = (): ReactElement => {
  return (
    <>
      <img
        data-src={backgroundReverseSmallImg}
        data-srcset={`${backgroundReverseBigImg} 1100w`}
        className="background-image animated"
        alt=""
      />
      <img src={logoLines} alt="" id="accueil-logo-lines" />
      <div className="section-content h-align">
        <div className="info-box">
          <p>4 - 5</p>
          <p>Juillet</p>
          <p>2020</p>
        </div>
        <div>
          <h1>FoknoFolies</h1>
          <h2>Édition #5</h2>
        </div>
        <div className="info-box">
          <p>
            J <span id="remaining-days">- 0</span>
          </p>
        </div>
      </div>
      <div className="scroll-button">
        <span />
        <span />
        <span />
      </div>
    </>
  );
};

export default Home;
