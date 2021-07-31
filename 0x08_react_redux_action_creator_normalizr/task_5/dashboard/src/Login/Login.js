import React from 'react';
import { StyleSheet, css } from 'aphrodite';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.handleLoginSubmit     = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail     = this.handleChangeEmail.bind(this);
    this.handleChangePassword  = this.handleChangePassword.bind(this);

    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    };

  }

  handleLoginSubmit (event) {
    event.preventDefault();
    this.setState({
      isLoggedIn: true
    }, () => (this.state.isLoggedIn) ? this.props.logIn(this.state.email, this.state.password): null );
  }
  handleChangeEmail (event) {
    this.setState({
      email: event.target.value
    }, () => this.allowSubmit());
  }
  handleChangePassword (event) {
    this.setState({
      password: event.target.value
    }, () => this.allowSubmit());
  }
  allowSubmit() {
    this.setState({
      enableSubmit: !!(this.state.email && this.state.password)
    });
  }

  render() {
    return (
      <div className={`App-body ${css(styles.divMargin)}`}>      
        <p className={css(styles.paragraphPadding)}>Login to access the full dashboard</p>
        <form id="form"
              onSubmit={this.handleLoginSubmit}
        >
          <div className="inputGroup">
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChangeEmail}
                   value={this.state.email}
                   type="text"
                   name="email"
                   id="email"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="password">Password</label>
            <input onChange={this.handleChangePassword}
                   value={this.state.password}
                   type="password"
                   name="password"
                   id="password"
            />
          </div>
          <button type="submit"
                  disabled={!this.state.enableSubmit}>OK</button>
        </form>
      </div>
    )
  }
}

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
});

export default Login;
