import React, { ReactElement, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { FB_APP_ID } from 'config';
import App from 'containers/app';
import Login from 'containers/login';
import PrivateRoute from 'containers/private-route';
import useLogin from 'hooks/use-login';
import Loader from 'components/loader';

const loadFbSdk = () => {
  // Load the SDK asynchronously
  const id = 'facebook-jssdk';
  const fjs = document.querySelectorAll('script')[0];

  if (document.querySelector(`#${id}`)) return;
  const js: HTMLScriptElement = document.createElement('script');

  js.id = id;
  js.src = '//connect.facebook.net/fr_FR/sdk.js';
  fjs?.parentNode?.insertBefore(js, fjs);
};

const Root = (): ReactElement => {
  const [initialized, setInitialized] = useState(false);
  const { checkLoginState } = useLogin();

  const loadFBLoginApi = (): void => {
    window.fbAsyncInit = (): void => {
      window.FB.init({
        appId: FB_APP_ID,
        version: 'v6.0',
      });

      checkLoginState()
        .then(() => setInitialized(true))
        .catch(error => console.log(error));
    };
  };

  useEffect(() => {
    loadFBLoginApi();
    loadFbSdk();
  }, []);

  if (!initialized) {
    return <Loader />;
  }

  return (
    <Switch>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" exact component={App} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Root;
