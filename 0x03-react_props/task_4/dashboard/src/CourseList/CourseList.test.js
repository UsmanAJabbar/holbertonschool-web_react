import assert from  'assert';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe('Test CourseList component', () => {
  it('test that CourseList renders without crashing', () => {
    const wrapper = shallow(<CourseList />);
    assert.equal(wrapper.length, 1);
  });
  it('Tests that the table renders 5 rows', () => {
    const wrapper = shallow(<CourseList />);
    assert.equal(wrapper.find('CourseListRow').length, 5);
  });
});