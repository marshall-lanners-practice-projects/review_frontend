import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/authenticationActions';
import PropTypes from 'prop-types';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUp = ({ loading, error, registerUser, history }) => {
  return (
    <>
      <NavBar />
      <h1>SignUp</h1>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('First Name is required'),
          email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
        })}
        onSubmit={fields => {
          const { username, password, email } = fields;
          const user = { username: username, password: password, email: email };
          // registerUser(user, history);
          console.log(user, history);
        }}
        render={({ errors, status, touched }) => (
          <Form>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name</label>
              <Field name='username' type='text' />
              <ErrorMessage name='username' component='div' />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <Field name='email' type='text' />
              <ErrorMessage name='email' component='div' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <Field name='password' type='password' />
              <ErrorMessage name='password' component='div' />
            </div>
            <div className='form-group'>
              <label htmlFor='confirmPassword'>Confirm Password</label>
              <Field name='confirmPassword' type='password' />
              <ErrorMessage name='confirmPassword' component='div' />
            </div>
            <button type='submit'>Register</button>
          </Form>
        )}
      />
    </>
  );
};

SignUp.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.string,
  registerUser: PropTypes.func,
  history: PropTypes.object
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  registerUser: (user, history) => dispatch(registerUser(user, history))
});

connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

export default SignUp;
