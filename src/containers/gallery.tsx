import React, { ReactElement } from 'react';

import Carousel from 'components/carousel';

const Gallery = (): ReactElement => {
  return (
    <div className="section-content">
      <h2>Gallerie</h2>
      <p className="sub-title">Aperçu des éditions précédentes</p>
      <Carousel />
    </div>
  );
};

export default Gallery;
