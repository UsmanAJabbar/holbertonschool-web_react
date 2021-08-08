import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer
} from './uiActionCreators';

describe('Tests uiActionCreator functions', () => {

  it('Tests whether login(username, password) returns the right output', () => {
    const email = 'someemail@gmail.com', password = 'somepass';
    const expected = {
      user: { email, password },
      'type': 'LOGIN'
    };
    expect(login(email, password))
      .toStrictEqual(expected);
  });
  it('Tests whether logout() returns the right output', () => {
    const expected = { 'type': 'LOGOUT' };
    expect(logout())
      .toStrictEqual(expected);
  });
  it('Tests whether displayNotificationDrawer() returns the right output', () => {
    const expected = { 'type': 'DISPLAY_NOTIFICATION_DRAWER' };
    expect(displayNotificationDrawer())
      .toStrictEqual(expected);
  });
  it('Tests whether hideNotificationDrawer() returns the right output', () => {
    const expected = { 'type': 'HIDE_NOTIFICATION_DRAWER' };
    expect(hideNotificationDrawer())
      .toStrictEqual(expected);
  });

});
