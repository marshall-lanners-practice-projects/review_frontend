import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authenticationActions';
import PropTypes from 'prop-types';

const Login = ({ loading, error, loginUser, history }) => {
  const [userText, setUserText] = useState('');
  const [passwordText, setPasswordTest] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = { username: userText, password: passwordText };
    loginUser(user, history);
    setUserText('');
    setPasswordTest('');
  };

  return (
    <>
      <NavBar />
      <div>
        <h2>{loading && 'Loading'}</h2>
      </div>
      <div>
        <h2>{error}</h2>
      </div>
      <form>
        <input
          type='text'
          name='username'
          placeholder='password'
          value={userText}
          onChange={e => setUserText(e.target.value)}
        />
        <br />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={passwordText}
          onChange={e => setPasswordTest(e.target.value)}
        />
        <br />
        <button onClick={e => handleSubmit(e)}>Submit</button>
      </form>
      <h1>Login</h1>
    </>
  );
};

Login.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  loginUser: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  loginUser: (user, history) => dispatch(loginUser(user, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
