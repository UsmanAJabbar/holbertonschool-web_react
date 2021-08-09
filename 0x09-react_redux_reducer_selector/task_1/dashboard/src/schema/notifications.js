import { default as notificationsJSON } from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';

// Loop through notifications filters and pulling out objects where userId == notifications.someId.author

/**
 * getAllNotificationsByUser =>
 * return a list containing all the context objects
 * from the notifications.json data when the
 * author id is the same as the userId
 */
const getAllNotificationsByUser = (userId) => {
  const messagesByUser = []
  const { notifications, messages } = normalizedData.entities;

  for (const notificationId in notifications)
    if (notifications[notificationId].author === userId)
      messagesByUser.push(
        messages[
          notifications[notificationId].context
        ]
      );

  return messagesByUser;
}

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
