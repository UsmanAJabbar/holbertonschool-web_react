const assert = require('assert');
import { shallow } from 'enzyme';
import App from './App';


describe('Test App component', () => {
  let wOArgsApp = null;
  let wArgsApp = null;

  beforeEach(() => {
    wOArgsApp = shallow(<App />);
    wArgsApp = shallow(<App isLoggedIn={true} />);
  });

  afterEach(() => {
    wOArgsApp = wArgsApp = null;
  });

  it('test that App renders without crashing', () => {
    assert.equal(wOArgsApp.length, 1);
  });
  it('Tests whether the <Header /> component exists', () => {
    assert.equal(wOArgsApp.find('Header').exists(), true);
  });
  it('Tests whether the <Login /> component exists', () => {
    assert.equal(wOArgsApp.find('Login').exists(), true);
  });
  it('Tests whether the <Footer /> component exists', () => {
    assert.equal(wOArgsApp.find('Footer').exists(), true);
  });
  it('Tests whether the <Login /> is rendered rather than <CourseList />', () => {
    assert.equal(wOArgsApp.find('Login').exists(), true);
    assert.equal(wOArgsApp.find('CourseList').exists(), false);
  });
  it('Tests whether the <CourseList /> is rendered rather than <Login />', () => {
    assert.equal(wArgsApp.find('Login').exists(), false);
    assert.equal(wArgsApp.find('CourseList').exists(), true);
  });
});
