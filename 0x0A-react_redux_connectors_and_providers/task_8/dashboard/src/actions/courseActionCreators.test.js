import {
  selectCourse,
  unSelectCourse,
} from './courseActionCreators';

describe('Test that tests the courseAction functions', () => {
  const index = 2;

  it('Tests whether selectCourse(index) returns the right payload', () => {
    expect(selectCourse(index))
      .toStrictEqual({
        type: 'SELECT_COURSE',
        index
      });
  });
  it('Tests whether unSelectCourse(index) returns the right payload', () => {
    expect(unSelectCourse(index))
      .toStrictEqual({
        type: 'UNSELECT_COURSE',
        index
      });
  });

})
