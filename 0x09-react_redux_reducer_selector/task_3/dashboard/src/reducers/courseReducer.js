import {
  FETCH_COURSE_SUCCESS,
  UNSELECT_COURSE,
  SELECT_COURSE,
} from '../actions/courseActionTypes';

const courseReducer = (state = [], action = { type: '' }) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map(
        courseObj => ({ ...courseObj, isSelected: false })
      );
    case SELECT_COURSE:
      return state.map(
        courseObj => ({
          ...courseObj,
          isSelected: (courseObj.id === action.index) ? true : courseObj.isSelected || false
        })
      );
    case UNSELECT_COURSE:
      return state.map(
        courseObj => ({
          ...courseObj,
          isSelected: (courseObj.id === action.index) ? false : courseObj.isSelected || false
        })
      );
    default:
      return state;
  };
};

export default courseReducer;
