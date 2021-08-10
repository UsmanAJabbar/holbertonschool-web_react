import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters
} from '../actions/notificationActionTypes';

const notificationsReducer = (state = {}, action = { type: '' }) => {
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
        notifications: actions.data.map(
          notificationObj => ({
            ...notificationObj,
            isRead: (action.index == notificationObj.id) ? true : notificationObj.isRead || false
          })
        )
      }
    case SET_TYPE_FILTER:
      state = {
        filter: action.filter,
        notifications: actions.data.map(
          notificationObj => ({
            ...notificationObj,
            isRead: (action.index == notificationObj.id) ? false : notificationObj.isRead || false
          })
        )
      }
    default:
      break
  }
  return state;
}

export {
  notificationsReducer
};
