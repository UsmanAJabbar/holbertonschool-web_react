/**
 * @jest-environment jsdom
 * istanbul ignore file
 */

import assert from 'assert';
import { shallow, mount } from 'enzyme';

import withLogging from './WithLogging';

describe('Test WithLogging HOC function', () => {
  let wrapperShallow = null;
  let wrapperMount = null;
  let mockedConsoleLog = null;
  let LoggingComponent = withLogging(() => <p />);
  let LoggingMount = withLogging(<p></p>)

  beforeEach(() => {
    LoggingComponent = withLogging(() => <p />);
    wrapperShallow = shallow(<LoggingComponent />);
    wrapperMount = mount(<LoggingComponent />);
    mockedConsoleLog = console.log = jest.fn();
  })
  afterEach(() => {
    wrapperShallow = wrapperMount = null;
  })

  it('Tests whether WithLogging as a component explodes', () => {
    assert.equal(wrapperShallow.length, 1);
  });
  it('Tests whether mount and unmount works perfectly', () => {
    expect(mockedConsoleLog).toHaveBeenCalledTimes(2);
  })
})
