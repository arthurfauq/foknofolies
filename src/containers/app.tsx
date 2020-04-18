import ReactFullpage from '@fullpage/react-fullpage';
import moment from 'moment';
import React, { ReactElement, useEffect, useState, ElementType } from 'react';
import { useSelector } from 'react-redux';

import Page from 'components/page';
import Activities from 'containers/activities';
import Contact from 'containers/contact';
import Gallery from 'containers/gallery';
import Home from 'containers/home';
import Itinerary from 'containers/itinerary';
import LoadingScreen from 'containers/loading-screen';
import Pot from 'containers/pot';
import Unauthorized from 'containers/unauthorized';
import { RootState } from 'reducers';

type Section = {
  id: string;
  label: string;
  component: ElementType;
};

const SECTIONS: Section[] = [
  {
    id: 'accueil',
    label: 'Accueil',
    component: Home,
  },
  {
    id: 'itineraire',
    label: 'Itinéraire',
    component: Itinerary,
  },
  {
    id: 'programme',
    label: 'Programme',
    component: Activities,
  },
  {
    id: 'cagnotte',
    label: 'cagnotte',
    component: Pot,
  },
  {
    id: 'gallerie',
    label: 'Gallerie',
    component: Gallery,
  },
  {
    id: 'contact',
    label: 'Contact',
    component: Contact,
  },
];

const initCountdown = () => {
  const days = moment('2020-07-04').diff(moment().format('YYYY-MM-DD'), 'days');

  const counter: any = {
    $element: null,
    count: 0,
    maxCount: days,
    interval: null,
    init() {
      this.$element = $('#remaining-days');

      this.run();

      this.interval = setInterval(() => counter.run(), 20);
    },
    run() {
      if (this.maxCount >= 0) this.$element.html(`- ${this.count}`);
      else this.$element.html(`+ ${this.count}`);

      if (this.count === Math.abs(this.maxCount)) window.clearInterval(this.interval);
      else this.count += 1;
    },
  };

  $('.info-box').each(function(this) {
    $(this)
      .fadeIn()
      .css('display', 'flex');
  });

  setTimeout(() => {
    counter.init();
  }, 500);
};

type FullPageSection = {
  anchor: string;
  index: number;
  item: Element;
  isFirst: boolean;
  isLast: boolean;
};

type FullPageDirection = 'up' | 'down';

const onLeave = (origin: FullPageSection, destination: FullPageSection): void => {
  const to = destination.index;

  for (let i = 0; i < SECTIONS.length; i += 1) {
    const opacity = to === 0 || i > to ? 0 : 0.35;

    $('#logo-line')
      .find('svg')
      .children()
      .eq(i)
      .css('opacity', opacity);
    $('#logo-line')
      .find('svg')
      .children()
      .eq(i + 4)
      .css('opacity', opacity);
  }
};

const afterSlideLoad = () => {
  const activeSlide = $('#programme-section.fp-section.active').find('.fp-slide.active');

  activeSlide.find('.description-text').addClass('fadeInUp');
  activeSlide.find('.description-title').addClass('fadeIn');
  activeSlide.find('.playlist').addClass('fadeInUp');
  activeSlide.find('hr.fadeRight').addClass('fadeInRight');
  activeSlide.find('hr.fadeLeft').addClass('fadeInLeft');
  activeSlide.find('.description-icon').addClass('bounceIn');
};

const afterLoad = (origin: FullPageSection, destination: FullPageSection): void => {
  afterSlideLoad();

  $(destination.item)
    .find('.background')
    .addClass(destination.isFirst ? 'fadeInDown' : 'fadeInUp');
};

const App = (): ReactElement => {
  const [loading, setLoading] = useState(true);
  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);

  useEffect(() => {
    if (!loading) {
      setTimeout(initCountdown, 500);

      $('.background').css('display', 'block');
    }
  }, [loading]);

  if (!isAuthorized) {
    return <Unauthorized />;
  }

  return (
    <>
      <LoadingScreen isVisible={loading} onHide={() => setLoading(false)} />
      <ReactFullpage
        menu="#v-nav"
        css3={false}
        animateAnchor={false}
        recordHistory={false}
        scrollingSpeed={600}
        autoScrolling
        fitToSection
        controlArrows
        slidesNavigation
        lazyLoading
        slidesNavPosition="bottom"
        verticalCentered={false}
        sectionSelector=".section"
        fixedElements="#logo-line"
        normalScrollElements="#maps, .owl-item"
        onLeave={onLeave}
        afterLoad={afterLoad}
        afterSlideLoad={afterSlideLoad}
        render={(): ReactElement => (
          <ReactFullpage.Wrapper>
            {SECTIONS.map(({ id, component: Component }) => (
              <div id={`${id}-section`} className="section" data-anchor={id} key={id}>
                <Page>
                  <Component />
                </Page>
              </div>
            ))}
          </ReactFullpage.Wrapper>
        )}
      />

      <div id="logo-line">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2350 1950">
          <line x1="1.15" y1="1126.47" x2="1087.97" y2="1.49" />
          <line x1="1087.97" y1="1.49" x2="2341.27" y2="1203.39" />
          <line x1="503.35" y1="1721.33" x2="2341.27" y2="1203.39" />
          <line x1="1.15" y1="1126.47" x2="503.35" y2="1721.33" />
          <line x1="1.15" y1="1126.47" x2="2029.44" y2="1936.71" />
          <line x1="1.15" y1="1126.47" x2="2008.08" y2="115.45" />
          <line x1="2029.44" y1="1936.71" x2="2008.08" y2="115.45" />
          <line x1="1087.97" y1="1.49" x2="2008.08" y2="115.45" />
          <line x1="2341.27" y1="1203.39" x2="2008.08" y2="115.45" />
        </svg>
      </div>

      <ul id="v-nav">
        {SECTIONS.map(({ id, label }) => (
          <li className="nav-link" data-menuanchor={id} key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
