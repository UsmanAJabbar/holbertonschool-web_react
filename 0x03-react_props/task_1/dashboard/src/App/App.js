import React from 'react';

import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </React.Fragment>
  );
}

export default App;
