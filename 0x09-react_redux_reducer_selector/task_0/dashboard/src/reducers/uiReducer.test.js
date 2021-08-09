import { reducer } from './uiReducer';

describe('Test whether UIReducer as a function returns the expected output', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  };

  it('Test whether uiReducer does not modify the state if no parameters are passed', () => {
    const output = reducer();
    expect(output).toStrictEqual(initialState);
  });
  it('Test whether the state is mutated when an invalid type is passed', () => {
    const output = reducer(
      initialState,
      { type: 'SELECT_COURSE'}
    );
    expect(output).toStrictEqual(initialState);
  });
  it('Test whether passing a valid type modifies the correct property within the state', () => {
    const output = reducer(
      initialState,
      { type: 'DISPLAY_NOTIFICATION_DRAWER' }
    );
    expect(output).toStrictEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  });

});
