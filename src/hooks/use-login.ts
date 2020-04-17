import { useSelector, useDispatch } from 'react-redux';

import { RootState } from 'reducers';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from 'reducers/auth';
import { getMe, checkMember } from 'services/user';

enum FBLoginResponseStatus {
  CONNECTED = 'connected',
  UNAUTHORIZED = 'not_authorized',
}

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
      const { isMember } = await checkMember(name);

      dispatch({ type: LOGIN_SUCCESS, isAuthorized: isMember });
    } else {
      dispatch({ type: LOGIN_FAILURE });
    }
  };

  return { checkLoginState, isAuthenticated, isAuthorized };
};

export default useLogin;
