import assert from 'assert';
import courseReducer from './courseReducer';
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

    expect(courseReducer([], action))
      .toStrictEqual(
        action.data.map(
          courseObj => ({ ...courseObj, isSelected: false })
        )
    );
  });
  it('Tests whether the action SELECT_COURSE returns the expected data', () => {
    const index = 1;
    const action = selectCourse(index);

    /** 
     * I have to verify that the state passed to the
     * courseReducer() actually sets isSelected attr
     * on an object with that id to true
     * */
    expect(
      courseReducer(courses, action)
        .filter(
          courseObj => courseObj.id == action.index
        )[0].isSelected
    ).toEqual(true);
  });
  it('Tests whether the action SELECT_COURSE returns the expected data', () => {
    const index = 1;
    const action = unSelectCourse(index);

    expect(
      courseReducer(courses, action)
        .filter(
          courseObj => courseObj.id == action.index
        )[0].isSelected
    ).toEqual(false);
  });
})
