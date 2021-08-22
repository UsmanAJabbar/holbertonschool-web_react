import { createSelector } from 'reselect'

const filterTypeSelected = (state) => state.notifications.get('filter');
const getNotifications = (state) => state.notifications.get('notifications');

const getUnreadNotificationsByType = createSelector(
  state => getNotifications(state),
  state => filterTypeSelected(state),
  (notifications, filter) => notifications.filter(
    notifs => notifs.type == filter.toLowerCase() && !notifs.isRead
  )
)

export {
  filterTypeSelected,
  getNotifications,
  getUnreadNotificationsByType
}
