import React, { ReactElement } from 'react';

import arthurImg from 'images/arthur.jpg';
import gaspardImg from 'images/gaspard.jpg';
import camilleImg from 'images/camille.jpg';
import useLogin from 'hooks/use-login';

const Contact = (): ReactElement => {
  const { logout } = useLogin();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <div className="background animated">
        <div className="background-image" />
      </div>
      <div className="section-content">
        <h2>Contact</h2>
        <div className="contact-zone">
          <div className="description-zone">
            <img src={camilleImg} className="description-photo" alt="" />
            <div className="description-content">
              <p className="description-title">Camille Fauquenot</p>
              <p className="description-text">06 67 95 29 42</p>
            </div>
          </div>
          <div className="description-zone">
            <img src={gaspardImg} className="description-photo" alt="" />
            <div className="description-content">
              <p className="description-title">Gaspard Fauquenot</p>
              <p className="description-text">06 42 39 15 56</p>
            </div>
          </div>
          <div className="description-zone">
            <img src={arthurImg} className="description-photo" alt="" />
            <div className="description-content">
              <p className="description-title">Arthur Fauquenot</p>
              <p className="description-text">06 37 17 08 87</p>
            </div>
          </div>
        </div>
      </div>

      <button type="button" className="logout-button" onClick={handleLogout}>
        Déconnexion&nbsp;
        <i className="fa fa-lg fa-sign-out" />
      </button>
    </>
  );
};

export default Contact;
