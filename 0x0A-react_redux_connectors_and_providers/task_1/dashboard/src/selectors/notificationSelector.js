// import { Map } from "immutable";
// import { fetchNotificationsSuccess } from '../actions/notificationActionCreators';
// import { notificationsReducer } from "../reducers/notificationReducer";
// import { notificationsNormalizer } from "../schema/notifications";

const filterTypeSelected = (state) => state.get('filter');
const getNotifications = (state) => state.get('notifications');
const getUnreadNotifications = (state) => {
  const filteredNotifications = 
    Object.values(
      getNotifications(state)
    ).filter(
      notificationObjs => notificationObjs.isRead === false
    )
  return filteredNotifications;
}

// const data = [
//   {
//     id: 1,
//     type: "default",
//     value: "New course available"
//   },
//   {
//     id: 2,
//     type: "urgent",
//     value: "New resume available"
//   },
//   {
//     id: 3,
//     type: "urgent",
//     value: "New data available"
//   }
// ];
// const state = notificationsReducer(
//   undefined, fetchNotificationsSuccess(data)
// )

// describe('test', () => {
//   it('Tests', () => {
//     console.log(getUnreadNotifications(state))
//     expect(2).toEqual(3);
//   })
// })

export {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications
}
