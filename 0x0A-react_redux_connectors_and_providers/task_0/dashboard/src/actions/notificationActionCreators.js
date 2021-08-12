import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS
} from "./notificationActionTypes";

const markAsAread = (index) => ({ type: MARK_AS_READ, index });
const setNotificationFilter = (filter) => ({ type: SET_TYPE_FILTER, filter });
const fetchNotificationsSuccess = (data) => ({ type: FETCH_NOTIFICATIONS_SUCCESS, data});

export {
  markAsAread,
  setNotificationFilter,
  fetchNotificationsSuccess
};
