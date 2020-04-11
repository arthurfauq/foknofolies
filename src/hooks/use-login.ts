import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'reducers';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from 'reducers/auth';

import members from '../members.json';

enum FBLoginResponseStatus {
  CONNECTED = 'connected',
  UNAUTHORIZED = 'not_authorized',
}

type APIResponse = {
  name: string;
};

const getMe = async (): Promise<APIResponse> =>
  new Promise(resolve => {
    window.FB.api('/me', resolve);
  });

const useLogin = (): {
  checkLoginState: () => Promise<void>;
  isAuthenticated: boolean;
  isAuthorized: boolean;
} => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const isAuthorized = useSelector((state: RootState) => state.auth.isAuthorized);
  const dispatch = useDispatch();

  const checkLoginState = async (): Promise<void> => {
    const { status } = await new Promise(resolve => {
      window.FB.getLoginStatus(resolve);
    });

    if (status === FBLoginResponseStatus.CONNECTED) {
      const { name } = await getMe();

      dispatch({ type: LOGIN_SUCCESS, isAuthorized: members.includes(name) });
    } else {
      dispatch({ type: LOGIN_FAILURE });
    }
  };

  return { checkLoginState, isAuthenticated, isAuthorized };
};

export default useLogin;
