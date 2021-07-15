import React from 'react';
import { StyleSheet, css } from 'aphrodite';

import logo from '../assets/logo.jpg';

const Header = () => (
  <div className={`App-header ` + css(styles.header)}>
    <img className={css(styles.imgSize)} src={logo} alt=""/>
    <h1  className={css(styles.headingColor)}>School dashboard</h1>
  </div>
)

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
