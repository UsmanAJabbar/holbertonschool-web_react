import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

let initialState = Map({
  filter: 'DEFAULT',
  notifications: [],
  loading: false
});
const notificationsReducer = (state = initialState, action = { type: '' }) => {
  state = Map(state);
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        filter: action.filter || 'DEFAULT',
        notifications: action.data
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index + 1, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter)
    case SET_LOADING_STATE:
      return state.set('loading', !!action.bool)
    default:
      break
  }
  return state;
}

export {
  notificationsReducer,
  initialState
};
