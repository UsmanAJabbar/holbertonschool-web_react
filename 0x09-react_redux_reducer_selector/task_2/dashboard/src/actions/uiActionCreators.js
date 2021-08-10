import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './uiActionTypes';
import { createStore } from 'redux';
import { fetch } from 'node-fetch';

const store = createStore(() => {});
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
  store.dispatch(login(email, password));

  fetch(
    '../../dist/login-success.json'
    ).then(
      jsonData => jsonData.json()
    ).then(
      store.dispatch(loginSuccess())
    ).catch(
      store.dispatch(loginFailure())
    );
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
