import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  SET_LOADING_STATE
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';

let initialState = Map({
  filter: 'DEFAULT',
  notifications: [],
  loading: false
});
const notificationsReducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({
        filter: action.filter || 'DEFAULT',
        notifications: action.data
      });
    case MARK_AS_READ:
      return state.setIn(
        ['notifications', getIndex(state.toJS().notifications, action.index), 'isRead'],
        true
      );
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter)
    case SET_LOADING_STATE:
      return state.set('loading', !!action.bool)
    default:
      break
  }
  return state;
}

const getIndex = (arrayOfNotifs = [], guid = '') => arrayOfNotifs.findIndex(notifObj => notifObj.guid == guid) 

export {
  notificationsReducer,
  initialState
};
