import React from 'react';

const default_user = {
  email: 'context@gmail.com',
  password: 'contextPass',
  isLoggedIn: false
}
const logOut = () => { console.log('Context logout ran successfully'); }

const AppContext = React.createContext({ ...default_user, logOut });

export default AppContext;
