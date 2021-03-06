import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

const notificationsReducer = (state = { filter: '', notifications: [] }, action = { type: '' }) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      state = {
        filter: action.filter,
        notifications: action.data.map(
          notificationObj => ({ ...notificationObj, isRead: false })
        )
      }
    case MARK_AS_READ:
      state = {
        filter: action.filter,
        notifications: [ ...state.notifications ].map(
          notificationObj => ({
            ...notificationObj,
            isRead: (action.index == notificationObj.id) ? true : notificationObj.isRead || false
          })
        )
      }
    case SET_TYPE_FILTER:
      state = {
        filter: action.filter,
        notifications: [ ...state.notifications ]
      }
    default:
      break
  }
  return state;
}

export {
  notificationsReducer
};
