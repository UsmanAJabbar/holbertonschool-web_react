import { getCourses } from './courseSelector';
import { fromJS } from 'immutable';


describe('Tests Course Selector, getCourses()', () => {
  it('Tests whether getCourses returns the correct data', () => {
    const courses = [
      {id: 1, credit: 60, name: 'ES6'},
      {id: 2, credit: 20, name: 'Webpack'},
      {id: 3, credit: 40, name: 'React'},
    ]

    const initialState = ({ courses: fromJS(courses) });

    expect(getCourses(initialState).toJS())
      .toStrictEqual(courses)
  })
})
