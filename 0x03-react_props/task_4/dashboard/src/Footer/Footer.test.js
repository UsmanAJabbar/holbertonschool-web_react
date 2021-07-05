const assert = require('assert');
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Test header exists', () => {
  it('test that header renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether the text "Copyright" renders', () => {
    const wrapper = shallow(<Footer />);
    assert(wrapper.find('p').text().includes('Copyright'), true);
  });
});