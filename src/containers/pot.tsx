import React, { ReactElement } from 'react';

const Pot = (): ReactElement => {
  return (
    <div className="container-fluid flexbox">
      <div className="section-content v-align">
        <h2>Cagnotte</h2>
        {/* <div className="description-zone">
          <div className="description-text">
            Nous vous demandons une participation de 25€ minimum, qui comprend de quoi vous abreuver, vous empiffrer et
            vous divertir tout le week-end.
          </div>
        </div> */}
        <button type="button" className="large-button large-button--disabled">
          À venir
        </button>
      </div>
    </div>
  );
};

export default Pot;
