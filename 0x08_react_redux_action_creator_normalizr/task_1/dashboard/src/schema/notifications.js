import { default as notificationsJSON } from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

/**
 * getAllNotificationsByUser =>
 * return a list containing all the context objects
 * from the notifications.json data when the
 * author id is the same as the userId
 */
const getAllNotificationsByUser = (userId) =>
  notificationsJSON
    .filter(notification => notification.author.id == userId)
    .map(filtered_data => filtered_data.context);

/**
 * ***************************
 * Setup normalizr schema data
 * ***************************
 */
const user = new schema.Entity("users");
const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);
const notification = new schema.Entity(
  'notifications',
  { author: user, context: message }
);
const normalizedData = normalize(notificationsJSON, [notification]);


export { getAllNotificationsByUser, normalizedData };
