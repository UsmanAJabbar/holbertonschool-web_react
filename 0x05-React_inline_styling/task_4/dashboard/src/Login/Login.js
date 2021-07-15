import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const Login = () => (
  <div className={"App-body " + css(styles.divMargin)}>      
    <p className={css(styles.paragraphPadding)}>Login to access the full dashboard</p>
    <div id="form">
      <div className="inputGroup">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div className="inputGroup">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit">OK</button>
    </div>
  </div>
)

const styles = StyleSheet.create({
  divMargin: {
    margin: '40px',
  },
  paragraphPadding: {
    padding: '10px 0'
  },
  form: {
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
    }
  },
})

export default Login;
