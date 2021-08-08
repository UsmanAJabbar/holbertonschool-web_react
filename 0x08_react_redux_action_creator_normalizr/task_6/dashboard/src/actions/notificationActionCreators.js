import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";

const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index
});

const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

export {
  markAsAread,
  setNotificationFilter
}
