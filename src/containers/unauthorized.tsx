import React, { ReactElement } from 'react';

import Page from 'components/page';
import logo from 'images/logo-foknofolies.svg';

const Unauthorized = (): ReactElement => {
  return (
    <Page flexDirection="column">
      <img src={logo} alt="" className="logo" />
      <div className="section-content">
        <div className="description-zone">
          <p className="description-text">Sauf erreur de notre part, vous ne participez pas aux FoknoFolies.</p>
          <p className="description-text">
            En cas de problème, contactez-nous à l&apos;adresse suivante:&nbsp;
            <a href="mailto:arthurfauquenot@yahoo.com?Subject=Contact Foknofolies">arthurfauquenot@yahoo.com</a>
          </p>
        </div>
      </div>
    </Page>
  );
};

export default Unauthorized;
