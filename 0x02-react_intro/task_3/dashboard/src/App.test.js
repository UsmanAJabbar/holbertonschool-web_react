import {shallow, mount, render} from 'enzyme';
import App from './App';

describe('Test App component', () => {
  it('test that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  })
  it('verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').hasClass('App-header')).to.equal(true);
  });
  it('verify that App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').hasClass('App-body')).to.equal(true);
  });
  it('verify that App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('div').hasClass('App-footer')).to.equal(true);
  });
});
