import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe('Tests notificationActionCreators functions', () => {
  it('Tests whether setNotificationFilter(filter) returns the expected output', () => {
    const filter = "DEFAULT"
    const expected = {
      'type': 'SET_TYPE_FILTER',
      filter
    };
    expect(setNotificationFilter(filter))
      .toStrictEqual(expected);
  });
  it('Tests whether markAsAread(index) returns the expected output', () => {
    const index = 2;
    const expected = {
      index,
      type: 'MARK_AS_READ'
    }
    expect(markAsAread(index))
      .toStrictEqual(expected);
  });
})
