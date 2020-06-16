import React, { ReactElement } from 'react';

const Pot = (): ReactElement => {
  return (
    <div className="section-content v-align">
      <h2>Cagnotte</h2>
      <div className="description-zone">
        <div className="description-text">
          Nous vous demandons une participation de 32€ minimum, qui comprend de quoi vous abreuver, vous empiffrer et
          vous divertir tout le week-end.
        </div>
      </div>
      <a
        type="button"
        href="https://paypal.me/pools/c/8pTt77nQ2D"
        target="_blank"
        rel="noopener noreferrer"
        className="large-button"
      >
        Lien vers la cagnotte
      </a>
    </div>
  );
};

export default Pot;
