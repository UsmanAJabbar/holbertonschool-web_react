import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import logo from '../assets/logo.jpg';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  static contextType = AppContext;
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div className={`App-header ${css(styles.header)}`}>
        <img className={css(styles.imgSize)} src={logo} alt=""/>
        <h1  className={css(styles.headingColor)}>School dashboard</h1>
        {
          (this.context.isLoggedIn)
          ? <p id="logoutSection">
              Welcome <b>{this.context.email}</b>
              <a onClick={() => this.context.logOut()}>(logout)</a>
            </p>
          : null
        }
      </div>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    borderBottom: 'var(--border)',
  },
  imgSize: {
    height: '200px',
  },
  headingColor: {
    color: 'var(--color-holberton-primary)',
  }
})

export default Header;
