import { Map } from 'immutable';
import {
  FETCH_COURSE_SUCCESS,
  UNSELECT_COURSE,
  SELECT_COURSE,
} from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

let initialState = Map([]);
const courseReducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedCourses = coursesNormalizer(
        action.data.map(
          courseObj => ({ ...courseObj, isSelected: false })
        )
      );
      return state.merge(normalizedCourses);
    case SELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn([action.index, 'isSelected'], false);
    default:
      return state;
  };
};

export {
  courseReducer,
  initialState
};
