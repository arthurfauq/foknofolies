import React, { ComponentType, ReactElement } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import useLogin from 'hooks/use-login';

type Props = RouteProps & {
  component: ComponentType;
};

const PrivateRoute = ({ component: Component, ...routeProps }: Props): ReactElement => {
  const { isAuthenticated } = useLogin();

  if (!isAuthenticated) {
    return <Redirect to={{ pathname: '/login' }} />;
  }

  return <Route component={Component} {...routeProps} />;
};

export default PrivateRoute;
