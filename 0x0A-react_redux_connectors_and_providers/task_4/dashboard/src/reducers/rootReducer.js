import { courseReducer } from './courseReducer';
import { notificationsReducer } from './notificationReducer';
import { uiReducer } from './uiReducer';

const rootReducer = {
  courses: courseReducer,
  notifications: notificationsReducer,
  ui: uiReducer
};

export {
  rootReducer
};
