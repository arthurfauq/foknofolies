import React, { ReactElement } from 'react';

import Map from 'components/map';

const destination =
  'https://www.google.fr/maps/dir//47.75323,1.968723/@47.7522661,1.9340387,13z/data=!3m1!4b1!4m2!4m1!3e0';

const Itinerary = (): ReactElement => {
  return (
    <div className="section-content v-align animated">
      <h2>Itinéraire</h2>

      <div id="maps-container">
        <Map />
      </div>

      <div className="description-zone">
        <p className="description-text">Cliquez sur Go pour lancer un itinéraire depuis la position de votre choix.</p>
      </div>

      <a href={destination} target="_blank" rel="noopener noreferrer" className="large-button">
        Go
      </a>
    </div>
  );
};

export default Itinerary;
