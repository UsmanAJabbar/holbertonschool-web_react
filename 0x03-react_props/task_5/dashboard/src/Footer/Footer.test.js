const assert = require('assert');
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Test header exists', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Footer />);
  });

  it('test that header renders without crashing', () => {
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether the text "Copyright" renders', () => {
    assert(wrapper.find('p').text().includes('Copyright'), true);
  });

});