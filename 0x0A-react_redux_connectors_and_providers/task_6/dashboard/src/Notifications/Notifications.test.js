const assert = require('assert');
import { shallow } from 'enzyme';
import { getLatestNotifcation } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

import { newNotification as Notification} from './Notifications';

describe('Test Notifications component', () => {

  let displayDrawerListNotifs = null;
  let displayDrawerNoArgs = null;
  let noArgs = null;
  let displayDrawerExpandRemove = null;

  let mockedRemove = null;
  let mockedExpand = null;

  beforeEach(() => {
    noArgs                    = shallow(<Notification />);
    displayDrawerNoArgs       = shallow(<Notification displayDrawer={true} />);
    displayDrawerListNotifs   = shallow(<Notification displayDrawer={true}
                                                      listNotifications={listNotifications}
                                        />);
    mockedRemove = jest.fn();
    mockedExpand = jest.fn();
    displayDrawerExpandRemove = shallow(<Notification displayDrawer={true}
                                                      handleDisplayDrawer={mockedExpand}
                                                      handleHideDrawer={mockedRemove}
                                                      listNotifications={listNotifications}
                                        />);
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    displayDrawerNoArgs
    = displayDrawerListNotifs
    = noArgs
    = displayDrawerExpandRemove
    = null;

    mockedRemove
    = mockedExpand
    = null;

    jest.restoreAllMocks();
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotifcation()}}
  ];

  it('test that Notifications renders without crashing', () => {
    assert.equal(displayDrawerListNotifs.length, 1);
  })
  it('verify that Notifications renders three list items', () => {
    assert.equal(displayDrawerListNotifs.find('ul').children().length, 3);
  });
  it('verify that Notifications renders the text', () => {
    assert.equal(displayDrawerListNotifs.find('p').last().text(), 'Here is the list of notifications');
  });
  it('Verifies whether NotificationItem element renders', () => {
    assert.equal(displayDrawerListNotifs.find('NotificationItem').exists(), true);
  });
  it('Verfies whether menuItem is displayed when <Notification displayDrawer={false}>', () => {
    assert.equal(noArgs.find('.menuItem').exists(), true);
  });
  it('Verifies the Notifications box is not being displayed when <Notification displayDrawer={false}>', () => {
    assert.equal(noArgs.find('.Notifications').exists(), false);
  });
  it('Verfies whether menuItem is displayed when <Notification displayDrawer={true}>', () => {
    assert.equal(displayDrawerListNotifs.find('.menuItem').exists(), true);
  });
  it('Verifies the Notifications box is not being displayed when <Notification displayDrawer={true}>', () => {
    assert.equal(displayDrawerListNotifs.find('.Notifications').exists(), true);
  });
  it('Verifies whether Notifications renders correctly if you pass an empty array', () => {
    assert.equal(displayDrawerNoArgs.find('NotificationItem').length, 1);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('No new notification for now'), true);
  });
  it('Verifies whether Notifications renders correctly if you don\'t pass an empty array', () => {
    assert.equal(displayDrawerListNotifs.find('NotificationItem').length, 3);
  });
  it('Verifies whether "Here is the list of notifications" is displayed when listNotifications is empty', () => {
    assert.equal(displayDrawerNoArgs.find('NotificationItem').length, 1);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('No new notification for now'), true);
    assert.equal(displayDrawerNoArgs.find('NotificationItem').html().includes('Here is the list of notifications'), false);
  });
  // it('Verifies whether Notifications called the markNotificationAsRead() function that then calls console.log', () => {
  //   const mockedConsoleLog = console.log = jest.fn();
  //   const reactInstance = displayDrawerNoArgs.instance();

  //   const id = 1;

  //   reactInstance.markNotificationAsRead(id);

  //   const mockedMarkNotificationAsRead = reactInstance.markNotificationAsRead;

  //   expect(mockedMarkNotificationAsRead).toHaveBeenCalledOnce;
  //   expect(mockedConsoleLog).toHaveBeenCalledWith(`Notification ${id} has been marked as read`);
  // });
  it('Verifies whether clicking on the "Your Notifications" p-tag expands the menu', () => {
    displayDrawerExpandRemove.find('.menuItem')
                             .simulate('click');

    expect(mockedExpand).toHaveBeenCalledTimes(1);
  });
  it('Verifies whether clicking on the close button removed the notification menu', () => {
    displayDrawerExpandRemove.find('button')
                             .at(0)
                             .simulate('click');
    expect(mockedRemove).toHaveBeenCalledTimes(1);
  });
});
