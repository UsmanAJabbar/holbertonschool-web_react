import * as notifications from '../../../../notifications.json';

/**
 * getAllNotificationsByUser =>
 * return a list containing all the context objects
 * from the notifications.json data when the
 * author id is the same as the userId
 */
const getAllNotificationsByUser = (userId) =>
  notifications
    .filter(notification => notification.author.id == userId)
    .map(filtered_data => filtered_data.context);


export { getAllNotificationsByUser };
