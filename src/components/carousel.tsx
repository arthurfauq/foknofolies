import React, { ReactElement, memo } from 'react';
import OwlCarousel from 'react-owl-carousel';

import gallery from 'images/gallery';

const Carousel = (): ReactElement => {
  return (
    <div className="owl-container">
      <OwlCarousel
        items={1}
        startPosition={0}
        margin={25}
        stagePadding={25}
        nav
        loop
        autoWidth
        center
        navText={[
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
        ]}
        className="owl-carousel"
      >
        <img data-src={gallery.image25} alt="" />
        <img data-src={gallery.image24} alt="" />
        <img data-src={gallery.image18} alt="" />
        <img data-src={gallery.image19} alt="" />
        <img data-src={gallery.image1} alt="" />
        <img data-src={gallery.image2} alt="" />
        <img data-src={gallery.image3} alt="" />
        <img data-src={gallery.image4} alt="" />
        <img data-src={gallery.image22} alt="" />
        <img data-src={gallery.image26} alt="" />
        <img data-src={gallery.image27} alt="" />
        <img data-src={gallery.image6} alt="" />
        <img data-src={gallery.image10} alt="" />
        <img data-src={gallery.image11} alt="" />
        <img data-src={gallery.image20} alt="" />
        <img data-src={gallery.image21} alt="" />
        <img data-src={gallery.image12} alt="" />
        <img data-src={gallery.image14} alt="" />
        <img data-src={gallery.image15} alt="" />
        <img data-src={gallery.image16} alt="" />
      </OwlCarousel>
    </div>
  );
};

export default memo(Carousel);
