import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER
} from './uiActionTypes';

const login = (email, password) => ({
  user: { email, password },
  'type': LOGIN
});
const logout = () => ({ 'type': LOGOUT });
const displayNotificationDrawer = () => ({ 'type': DISPLAY_NOTIFICATION_DRAWER });
const hideNotificationDrawer = () => ({ 'type': HIDE_NOTIFICATION_DRAWER })

export {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
};
