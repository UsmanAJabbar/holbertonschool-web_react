import assert from  'assert';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('Test CourseList component', () => {
  let wListCourses = null;
  let wOListCourses = null;

  beforeEach(() => {
    wListCourses = shallow(<CourseList listCourses={listCourses} />);
    wOListCourses = shallow(<CourseList />);
  });
  afterEach(() => {
    wOListCourses = wOListCourses = null;
  })

  const listCourses = [
    {id: 1, credit: 60, name: 'ES6'},
    {id: 2, credit: 20, name: 'Webpack'},
    {id: 3, credit: 40, name: 'React'},
  ];

  it('test that CourseList renders without crashing', () => {
    assert.equal(wListCourses.length, 1);
  });
  it('Tests that the table renders 5 rows', () => {
    assert.equal(wListCourses.find('CourseListRow').length, 5);
  });
  it('Tests that \'No course available yet\' is rendered when listCourses isn\'t passed', () => {
    assert.equal(wOListCourses.find('CourseListRow').at(2).html().includes('No course available yet'), true);
  });
});
