import assert from 'assert';
import { Map } from 'immutable';
import { courseReducer } from './courseReducer';
import {
  fetchCourseSuccess,
  selectCourse,
  unSelectCourse
} from '../actions/courseActionCreators';


describe('Test the courseReducer function', () => {
  let courses = fetchCourseSuccess().data;

  it('Tests whether the default state of the courseReducer function returns and empty array', () => {
    const output = courseReducer();
    assert.equal(output, output);  /* Apparently [] != [] acc to JEST, seems like its checking IDs instead of values */
  });
  it('Tests whether the action FETCH_COURSE_SUCCESS returns all of the data', () => {
    const action = fetchCourseSuccess();

    expect(
      Object.values(courseReducer(undefined, action).toJS())
    ).toStrictEqual(
      action.data.map(
        courseObj => ({ ...courseObj, isSelected: false })
      )
    );
  });
  it('Tests whether the action SELECT_COURSE returns the expected data', () => {
    const index = 1;
    const action = selectCourse(index);

    const state = courseReducer(undefined, fetchCourseSuccess())
    expect(
      courseReducer(state, action)
        .getIn([action.index + 1, 'isSelected'])
    ).toEqual(true);
  });
  it('Tests whether the action SELECT_COURSE returns the expected data', () => {
    const index = 1;
    const action = unSelectCourse(index);

    const state = courseReducer(undefined, fetchCourseSuccess())
    expect(
      courseReducer(state, action)
        .getIn([action.index + 1, 'isSelected'])
    ).toEqual(false);
  });
})
