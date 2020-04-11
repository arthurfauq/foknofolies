import { AnyAction } from 'redux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

type AuthState = {
  isAuthenticated: boolean;
  isAuthorized: boolean;
};

const initialState: AuthState = {
  isAuthenticated: false,
  isAuthorized: false,
};

const reducer = (state: AuthState = initialState, action: AnyAction): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthorized: action.isAuthorized,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        isAuthorized: false,
      };
    default:
      return state;
  }
};

export default reducer;
