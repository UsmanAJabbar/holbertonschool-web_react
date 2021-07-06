import assert from  'assert';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('Test CourseList component', () => {
  const listCourses = [
    {id: 1, credit: 60, name: 'ES6'},
    {id: 2, credit: 20, name: 'Webpack'},
    {id: 3, credit: 40, name: 'React'},
  ];  
  it('test that CourseList renders without crashing', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    assert.equal(wrapper.length, 1);
  });
  it('Tests that the table renders 5 rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    assert.equal(wrapper.find('CourseListRow').length, 5);
  });
  it('Tests that \'No course available yet\' is rendered when listCourses isn\'t passed', () => {
    const wrapper = shallow(<CourseList />);
    assert.equal(wrapper.find('CourseListRow').at(2).html().includes('No course available yet'), true);
  });
});
