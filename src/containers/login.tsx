import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

import Page from 'components/page';
import logo from 'images/logo-foknofolies.svg';
import useLogin from 'hooks/use-login';
import { FB_APP_ID } from 'config';

const Login = (): ReactElement => {
  const history = useHistory();
  const { isAuthenticated, checkLoginState } = useLogin();

  useEffect(() => {
    if (isAuthenticated) {
      history.replace({ pathname: '/' });
    }
  }, [isAuthenticated]);

  return (
    <Page flexDirection="column">
      <img src={logo} alt="" className="logo" />
      <FacebookLogin
        appId={FB_APP_ID}
        version="6.0"
        callback={checkLoginState}
        autoLoad={false}
        fields="name"
        language="fr_FR"
        textButton="Continuer avec Facebook"
        size="medium"
        disableMobileRedirect
        buttonStyle={{ margin: 8 }}
      />
      <div className="section-content">
        <div className="description-zone">
          <p className="description-text">
            Seuls les participants aux FoknoFolies ont accès au site web de l&apos;évènement. Connectez vous avec
            Facebook pour une simple vérification.
          </p>
        </div>
      </div>
    </Page>
  );
};

export default Login;
