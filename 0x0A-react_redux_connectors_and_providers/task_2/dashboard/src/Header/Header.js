import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

import logo from '../assets/logo.jpg';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    const {
      user,
      logout
    } = this.props;

    return (
      <div className={`App-header ${css(styles.header)}`}>
        <img className={css(styles.imgSize)} src={logo} alt=""/>
        <h1 className={css(styles.headingColor)}>School dashboard</h1>
        {
          !!user
            ? (
                <p id="logoutSection">
                  Welcome <b>{user.email}</b>
                  <a onClick={() => logout()}>(logout)</a>
                </p>
              )
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

const mapStateToProps = (state) => ({
  user: state.get('user')
})

const mapDispatchToProps = {
  logout
}

Header.defaultType = {
  user: null,
  logout: () => {},
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
export { Header as newHeader };
