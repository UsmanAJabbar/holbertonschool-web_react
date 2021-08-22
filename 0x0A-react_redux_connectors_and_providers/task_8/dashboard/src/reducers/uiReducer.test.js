import { uiReducer } from './uiReducer';
import { is, Map } from 'immutable';
import assert from 'assert';

describe('Test whether UIReducer as a function returns the expected output', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });

  it('Test whether uiReducer does not modify the state if no parameters are passed', () => {
    const output = uiReducer(initialState);
    assert.equal(is(output, initialState), true);
  });
  it('Test whether the state is mutated when an invalid type is passed', () => {
    const output = uiReducer(initialState);
    assert.equal(is(output, initialState), true);
  });
  it('Test whether passing a valid type modifies the correct property within the state', () => {
    const output = uiReducer(
      initialState,
      { type: 'DISPLAY_NOTIFICATION_DRAWER' }
    );
    expect(output).toStrictEqual(Map({
      ...initialState.toJS(),
      isNotificationDrawerVisible: true
    }));
  });

});
