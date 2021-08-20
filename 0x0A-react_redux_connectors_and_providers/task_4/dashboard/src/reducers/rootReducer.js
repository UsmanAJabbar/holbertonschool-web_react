import {
  courseReducer,
  initialState as courseInitialState
} from './courseReducer';
import {
  notificationsReducer,
  initialState as notificationsInitialState
} from './notificationReducer';
import {
  uiReducer,
  initialState as uiInitialState
} from './uiReducer';


const rootReducerInitialState = {
  courses: courseInitialState,
  notifications: notificationsInitialState,
  ui: uiInitialState
}
const rootReducer = {
  courses: courseReducer,
  notifications: notificationsReducer,
  ui: uiReducer
};

export {
  rootReducer,
  rootReducerInitialState
};
