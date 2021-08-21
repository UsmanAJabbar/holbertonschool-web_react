const filterTypeSelected = (state) => state.notifications.get('filter');
const getNotifications = (state) => state.notifications.get('notifications');

const getUnreadNotifications = (state) => {
  const filteredNotifications = 
    Object.values(
      getNotifications(state)
    ).filter(
      notificationObjs => notificationObjs.isRead === false
    )
  return filteredNotifications;
}

export {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
}
