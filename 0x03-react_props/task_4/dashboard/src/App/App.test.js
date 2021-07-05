const assert = require('assert');
import { shallow } from 'enzyme';
import App from './App';


describe('Test App component', () => {
  it('test that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.length, 1);
  });
  it('Tests whether the <Header /> component exists', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('Header').exists(), true);
  });
  it('Tests whether the <Login /> component exists', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('Login').exists(), true);
  });
  it('Tests whether the <Footer /> component exists', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('Footer').exists(), true);
  });
  it('Tests whether the <Login /> is rendered rather than <CourseList />', () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('Login').exists(), true);
    assert.equal(wrapper.find('CourseList').exists(), false);
  });
  it('Tests whether the <CourseList /> is rendered rather than <Login />', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    assert.equal(wrapper.find('Login').exists(), false);
    assert.equal(wrapper.find('CourseList').exists(), true);
  });
});
