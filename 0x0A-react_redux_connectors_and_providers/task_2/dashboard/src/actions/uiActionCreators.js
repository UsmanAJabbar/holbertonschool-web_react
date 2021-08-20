import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';
import * as user from '../../dist/login-success.json';


/*======= This is my api simulation =======*/
const ping = (any) => {
  const response = {
      json: () => user
  }
  return new Promise((resolve, reject) => {
      if (!user) reject("Bad connection");
      setTimeout(() => {
          resolve(response);
      }, 250);
  });
}

const login = (email, password) => ({
  user: { email, password },
  'type': LOGIN
});
const logout = () => ({ 'type': LOGOUT });
const displayNotificationDrawer = () => ({ 'type': DISPLAY_NOTIFICATION_DRAWER });
const hideNotificationDrawer = () => ({ 'type': HIDE_NOTIFICATION_DRAWER });
const loginSuccess = () => ({ 'type': LOGIN_SUCCESS });
const loginFailure = () => ({ 'type': LOGIN_FAILURE });

const loginRequest = (email, password) => {
  const promise = ping();

  return (dispatch) => {
    dispatch(login(email, password));
    return promise
      .then(
        jsonData => jsonData.json()
      ).then(
        () => dispatch(loginSuccess())
      ).catch(
        () => dispatch(loginFailure())
      );
  };
}

export {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest
};
