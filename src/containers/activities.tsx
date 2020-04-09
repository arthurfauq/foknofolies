import React, { ReactElement, useEffect } from 'react';

import targetIcon from '../img/icons/target.svg';
import rocketIcon from '../img/icons/rocket.svg';
import doughnutIcon from '../img/icons/doughnut.svg';

const Activities = (): ReactElement => {
  useEffect(() => {
    $('#programme-section')
      .find('.description-icon, .description-text, .description-title, hr, .playlist')
      .addClass('animated')
      .css('opacity', 0);
  }, []);

  return (
    <div className="section-content">
      <h2>Programme</h2>
      <div className="slide description-zone fp-auto-height">
        <img src={targetIcon} alt="Target Icon" className="description-icon" />
        <hr className="fadeRight" />
        <p className="description-title">Samedi après-midi</p>
        <hr className="fadeLeft" />
        <p className="description-text">
          Un grand nombre d&apos;activités ludiques sont prévues pour vous divertir: piscine, quidditch, twerk contest,
          pétanque, molkky, pierre feuille ciseau, beer pong, badminton, chifoubaffes...
        </p>
      </div>
      <div className="slide description-zone fp-auto-height">
        <img src={rocketIcon} alt="Doughnut Icon" className="description-icon" />
        <hr className="fadeRight" />
        <p className="description-title">Samedi soir</p>
        <hr className="fadeLeft" />
        <p className="description-text">
          Aucune corne de brume ne sonnera la fin de l&apos;apéro, libre à vous donc de rejoindre le dancefloor le plus
          réputé de la région quand bon vous semble. Quelques artistes feront peut-être leur apparition sur scène pour
          vous divertir, mais c&apos;est peu probable.
        </p>
        <div className="hidden-xs" />
      </div>
      <div className="slide description-zone fp-auto-height" data-anchor="programme-dimanche">
        <img src={doughnutIcon} alt="Doughnut Icon" className="description-icon" />
        <hr className="fadeRight" />
        <p className="description-title">Dimanche</p>
        <hr className="fadeLeft" />
        <p className="description-text">
          Pour vous remettre de vos émotions et bien entamer cette belle gueule de bois dominicale, un brunch est prévu.
          Les FoknoFolies ne se terminant jamais pour de bon, vous pourrez profiter du soleil ou de la pluie
          jusqu&apos;à la fin de la journée.
        </p>
      </div>
    </div>
  );
};

export default Activities;
