import React, { ReactElement, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Page from 'components/page';
import logo from 'images/logo-foknofolies.jpg';
import useLogin from 'hooks/use-login';

const Login = (): ReactElement => {
  const history = useHistory();
  const { checkLoginState, isAuthenticated } = useLogin();

  const handleLogin = () => {
    window.FB.login(checkLoginState);
  };

  useEffect(() => {
    window.FB.XFBML.parse();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      history.replace({ pathname: '/' });
    }
  }, [isAuthenticated]);

  return (
    <Page flexDirection="column">
      <img src={logo} alt="" className="logo" />
      <button
        type="button"
        className="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="continue_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="true"
        aria-label="Facebook Login"
        onClick={handleLogin}
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
