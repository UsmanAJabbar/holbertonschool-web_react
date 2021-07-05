import assert from  'assert';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('Test suite for the courseListRow component', () => {
  it('Tests whether the courseListRow has been rendered', () => {
    const wrapper = shallow(<CourseListRow isHeader={true}
                                           textFirstCell={'Some text'}
                                           textSecondCell={'Not null'}
                            />);
    assert.equal(wrapper.length, 1);
  });
  describe('Test when isHeader is True', () => {
    it('Test whether two <th>s are present when textSecondCell is not null', () => {
      const wrapper = shallow(<CourseListRow isHeader={true}
                                             textFirstCell={'Some text'}
                                             textSecondCell={'Not null'}
                              />);
      assert.equal(wrapper.find('th').length, 2);
    });
    it('Test whether textSecondCell is null', () => {
      const wrapper = shallow(<CourseListRow isHeader={true}
                                             textFirstCell={'Some text'}
                              />);
      assert.equal(wrapper.find('th').length, 1);
      assert.equal(wrapper.find('th').html().includes('colSpan=\"2\"'), true);
    });
  });
  describe('Test when isHeader is False', () => {
    it('Tests whether two <th> cells are present when isHeader is false', () => {
      const wrapper = shallow(<CourseListRow isHeader={false}
                                             textFirstCell={'Some text'}
                              />);
      assert.equal(wrapper.find('td').length, 2);
    });
  });
});
