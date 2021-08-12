import assert from 'assert';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('Test BodySectionWithMarginBottom react component', () => {
  let BodySectionWithMarginBottomWithChildren = null;

  beforeEach(() => {
    BodySectionWithMarginBottomWithChildren = shallow(<BodySectionWithMarginBottom title={'test title'}>
                                                        <p>test children node</p>
                                                      </ BodySectionWithMarginBottom>);
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    BodySectionWithMarginBottomWithChildren = null;
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Test BodySectionWithMarginBottom does\'nt explode on render', () => {
    assert.equal(BodySectionWithMarginBottom.length, 1);
  });
  it('Test BodySectionWithMarginBottom contains the correct elements', () => {
    assert.equal(BodySectionWithMarginBottomWithChildren.find('.bodySectionWithMargin').exists(), true);
    assert.equal(BodySectionWithMarginBottomWithChildren.find('BodySection').exists(), true);
  });

})
