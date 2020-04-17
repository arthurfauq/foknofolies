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
        lazyLoad
        center
        navText={[
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
        ]}
        className="owl-carousel"
      >
        <img data-src={gallery.image25} alt="" className="owl-lazy" />
        <img data-src={gallery.image24} alt="" className="owl-lazy" />
        <img data-src={gallery.image18} alt="" className="owl-lazy" />
        <img data-src={gallery.image19} alt="" className="owl-lazy" />
        <img data-src={gallery.image1} alt="" className="owl-lazy" />
        <img data-src={gallery.image2} alt="" className="owl-lazy" />
        <img data-src={gallery.image3} alt="" className="owl-lazy" />
        <img data-src={gallery.image4} alt="" className="owl-lazy" />
        <img data-src={gallery.image22} alt="" className="owl-lazy" />
        <img data-src={gallery.image26} alt="" className="owl-lazy" />
        <img data-src={gallery.image27} alt="" className="owl-lazy" />
        <img data-src={gallery.image6} alt="" className="owl-lazy" />
        <img data-src={gallery.image10} alt="" className="owl-lazy" />
        <img data-src={gallery.image11} alt="" className="owl-lazy" />
        <img data-src={gallery.image20} alt="" className="owl-lazy" />
        <img data-src={gallery.image21} alt="" className="owl-lazy" />
        <img data-src={gallery.image12} alt="" className="owl-lazy" />
        <img data-src={gallery.image14} alt="" className="owl-lazy" />
        <img data-src={gallery.image15} alt="" className="owl-lazy" />
        <img data-src={gallery.image16} alt="" className="owl-lazy" />
      </OwlCarousel>
    </div>
  );
};

export default memo(Carousel);
