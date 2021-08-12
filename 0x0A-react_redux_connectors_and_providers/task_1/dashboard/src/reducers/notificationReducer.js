import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

let initialState = { filter: '', notifications: [] };
const notificationsReducer = (state = Map(initialState), action = { type: '' }) => {
  state = Map(state);
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifications = notificationsNormalizer(
        action.data.map(
          notificationObj => ({ ...notificationObj, isRead: false })
        )
      );
      return state.merge({
        filter: action.filter || 'DEFAULT',
        notifications: normalizedNotifications
      });
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index + 1, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter)
    default:
      break
  }
  return state;
}

export {
  notificationsReducer
};
