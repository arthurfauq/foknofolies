import React, { ReactElement, useEffect, useState } from 'react';
import moment from 'moment';
import ReactFullpage from '@fullpage/react-fullpage';

import Map from 'components/map';
import Carousel from 'components/carousel';
import LoadingScreen from 'components/loading-screen';

import targetIcon from '../img/icons/target.svg';
import rocketIcon from '../img/icons/rocket.svg';
import doughnutIcon from '../img/icons/doughnut.svg';
import backgroundReverseSmallImg from '../img/background-reverse-small.png';
import backgroundReverseBigImg from '../img/background-reverse-big.png';
import backgroundSmallImg from '../img/background-small.png';
import backgrounBigImg from '../img/background-big.png';
import logoLines from '../img/logo-foknofolies-trace.png';
import arthurImg from '../img/arthur.jpg';
import gaspardImg from '../img/gaspard.jpg';
import camilleImg from '../img/camille.jpg';

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

const onLeave = (origin, destination) => {
  for (
    let i = $('#logo-line')
        .find('svg')
        .children().length,
      t = destination.index - 1,
      a = t;
    a < i;
    a += 1
  ) {
    $('#logo-line')
      .find('svg')
      .children()
      .eq(a)
      .css('opacity', 0);

    for (let s = 0; s < t; s += 1) {
      $('#logo-line')
        .find('svg')
        .children()
        .eq(s)
        .css('opacity', 0.35);
      $('#logo-line')
        .find('svg')
        .children()
        .eq(i - 1 - s)
        .css('opacity', 0.35);
    }
  }

  if (origin.index === 1) {
    setTimeout(() => {
      $('#accueil-section .background-image')
        .eq(0)
        .removeClass('fadeInDown');
    }, 500);
  } else if (destination.index === 1) {
    $('#accueil-section .background-image')
      .eq(0)
      .addClass('fadeInDown');
  }

  if (origin.index === 6) {
    setTimeout(() => {
      $('#contact-section .background-image')
        .eq(0)
        .removeClass('fadeInUp');
    }, 500);
  } else if (destination.index === 6) {
    $('#contact-section .background-image')
      .eq(0)
      .addClass('fadeInUp');
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

const App = (): ReactElement => {
  const [initialized, setInitialized] = useState(false);

  const skipIntro = () => {
    $('#full-page').fadeIn('fast');
    $('#logo-animation').fadeOut('slow');
    setTimeout(() => initCountdown(), 500);
    setInitialized(true);
  };

  useEffect(() => {
    $('.loading-icon').fadeOut('slow');
    $('#logo-animation')
      .fadeIn('fast')
      .css('display', 'flex');

    setTimeout(() => {
      if (!initialized) {
        $('#full-page').fadeIn('fast');
        setTimeout(() => $('#logo-animation').fadeOut('slow'), 500);
        setTimeout(() => initCountdown(), 1000);
        setInitialized(true);
      }
    }, 8500);

    $('#programme-section')
      .find('.description-icon, .description-text, .description-title, hr, .playlist')
      .addClass('animated')
      .css('opacity', 0);

    $('.background-image').css('display', 'none');
    $('.background-image').on('load', function(this) {
      $(this).fadeIn();
    });
  }, []);

  return (
    <>
      <div className="loading-icon" />

      <LoadingScreen onSkip={skipIntro} />

      <ReactFullpage
        id="full-page"
        licenseKey={null}
        menu="#v-nav"
        css3={false}
        recordHistory={false}
        scrollingSpeed={600}
        autoScrolling
        fitToSection
        controlArrows
        slidesNavigation
        slidesNavPosition="bottom"
        verticalCentered={false}
        sectionSelector=".section"
        fixedElements="#logo-line"
        normalScrollElements="#maps, .owl-item"
        onLeave={onLeave}
        afterLoad={afterSlideLoad}
        afterSlideLoad={afterSlideLoad}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section" id="accueil-section" data-anchor="accueil">
              <img
                data-src={backgroundReverseSmallImg}
                data-srcset={`${backgroundReverseBigImg} 1100w`}
                className="background-image animated"
                alt=""
              />
              <div className="container-fluid flexbox">
                <img src={logoLines} alt="" />
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
              </div>
              <div className="scroll-button">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="section" id="itineraire-section" data-anchor="itineraire">
              <div className="container-fluid flexbox">
                <div className="section-content v-align animated">
                  <h2>Itinéraire</h2>
                  <div id="maps-loading">
                    <Map />
                  </div>
                  <div className="description-zone">
                    <p className="description-text">
                      Cliquez sur Go pour lancer un itinéraire depuis la position de votre choix.
                    </p>
                  </div>
                  <a
                    href="https://www.google.fr/maps/dir//47.75323,1.968723/@47.7522661,1.9340387,13z/data=!3m1!4b1!4m2!4m1!3e0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="large-button"
                  >
                    Go
                  </a>
                </div>
              </div>
            </div>

            <div className="section" id="programme-section" data-anchor="programme">
              <div className="container-fluid flexbox">
                <div className="section-content">
                  <h2>Programme</h2>
                  <div className="slide description-zone fp-auto-height" data-anchor="programme-samedi-aprem">
                    <img src={targetIcon} alt="Target Icon" className="description-icon" />
                    <hr className="fadeRight" />
                    <p className="description-title">Samedi après-midi</p>
                    <hr className="fadeLeft" />
                    <p className="description-text">
                      Un grand nombre d&apos;activités ludiques sont prévues pour vous divertir: piscine, quidditch,
                      twerk contest, pétanque, molkky, pierre feuille ciseau, beer pong, badminton, chifoubaffes...
                    </p>
                  </div>
                  <div className="slide description-zone fp-auto-height" data-anchor="programme-samedi-soir">
                    <img src={rocketIcon} alt="Doughnut Icon" className="description-icon" />
                    <hr className="fadeRight" />
                    <p className="description-title">Samedi soir</p>
                    <hr className="fadeLeft" />
                    <p className="description-text">
                      Aucune corne de brume ne sonnera la fin de l&apos;apéro, libre à vous donc de rejoindre le
                      dancefloor le plus réputé de la région quand bon vous semble. Quelques artistes feront peut-être
                      leur apparition sur scène pour vous divertir, mais c&apos;est peu probable.
                    </p>
                    <div className="hidden-xs" />
                  </div>
                  <div className="slide description-zone fp-auto-height" data-anchor="programme-dimanche">
                    <img src={doughnutIcon} alt="Doughnut Icon" className="description-icon" />
                    <hr className="fadeRight" />
                    <p className="description-title">Dimanche</p>
                    <hr className="fadeLeft" />
                    <p className="description-text">
                      Pour vous remettre de vos émotions et bien entamer cette belle gueule de bois dominicale, un
                      brunch est prévu. Les FoknoFolies ne se terminant jamais pour de bon, vous pourrez profiter du
                      soleil ou de la pluie jusqu&apos;à la fin de la journée.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="section" id="cagnotte-section" data-anchor="cagnotte">
              <div className="container-fluid flexbox">
                <div className="section-content v-align">
                  <h2>Cagnotte</h2>
                  <div className="description-zone">
                    <div className="description-text">
                      Nous vous demandons une participation de 25€ minimum, qui comprend de quoi vous abreuver, vous
                      empiffrer et vous divertir tout le week-end.
                    </div>
                  </div>
                  <button type="button" className="large-button large-button--disabled">
                    À venir
                  </button>
                </div>
              </div>
            </div>

            <div className="section" id="gallerie-section" data-anchor="gallerie">
              <div className="container-fluid flexbox">
                <div className="section-content">
                  <h2>Gallerie</h2>
                  <p className="sub-title">Aperçu des éditions précédentes</p>
                  <Carousel />
                </div>
              </div>
            </div>

            <div className="section" id="contact-section" data-anchor="contact">
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
                        <a href="tel:06 67 95 29 42" className="description-text">
                          06 67 95 29 42
                        </a>
                      </div>
                    </div>
                    <div className="description-zone">
                      <img src={gaspardImg} className="description-photo" alt="" />
                      <div className="description-content">
                        <p className="description-title">Gaspard Fauquenot</p>
                        <a href="tel:06 42 39 15 56" className="description-text">
                          06 42 39 15 56
                        </a>
                      </div>
                    </div>
                    <div className="description-zone">
                      <img src={arthurImg} className="description-photo" alt="" />
                      <div className="description-content">
                        <p className="description-title">Arthur Fauquenot</p>
                        <a href="tel:06 37 17 08 87" className="description-text">
                          06 37 17 08 87
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
        <li className="nav-link" data-menuanchor="accueil">
          <a href="#accueil">Accueil</a>
        </li>
        <li className="nav-link" data-menuanchor="itineraire">
          <a href="#itineraire">Itinéraire</a>
        </li>
        <li className="nav-link" data-menuanchor="programme">
          <a href="#programme">Programme</a>
        </li>
        <li className="nav-link" data-menuanchor="cagnotte">
          <a href="#cagnotte">Cagnotte</a>
        </li>
        <li className="nav-link" data-menuanchor="gallerie">
          <a href="#gallerie">Gallerie</a>
        </li>
        <li className="nav-link" data-menuanchor="contact">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </>
  );
};

export default App;
