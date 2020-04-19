import React, { ReactElement, memo, useRef, useEffect } from 'react';
import $ from 'jquery';

import gallery from 'images/gallery';

window.$ = $;
window.jQuery = $;

require('owl.carousel');

const options: OwlCarousel.Options = {
  items: 2,
  startPosition: 0,
  margin: 24,
  stagePadding: 16,
  nav: true,
  loop: true,
  lazyLoad: true,
  lazyLoadEager: 1,
  center: true,
  navText: [
    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
  ],
  responsive: {
    0: {
      dots: false,
    },
    768: {
      dots: true,
    },
  },
};

const Carousel = (): ReactElement => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container?.current) {
      $(container.current).owlCarousel(options);
    }
  }, []);

  return (
    <div className="owl-container">
      <div className="owl-carousel" ref={container}>
        <img data-src={gallery.image25} alt="" className="owl-lazy" />
        <img data-src={gallery.image24} alt="" className="owl-lazy" />
        <img data-src={gallery.image19} alt="" className="owl-lazy" />
        <img data-src={gallery.image1} alt="" className="owl-lazy" />
        <img data-src={gallery.image2} alt="" className="owl-lazy" />
        <img data-src={gallery.image3} alt="" className="owl-lazy" />
        <img data-src={gallery.image4} alt="" className="owl-lazy" />
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
      </div>
    </div>
  );
};

export default memo(Carousel);
