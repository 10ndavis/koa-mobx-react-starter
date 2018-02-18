import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import FloatingLabel from 'floating-label-react'


@inject("CounterStore") @observer
class SignIn extends Component {


  render() {
    return (
      <div className='SignIn'>
        Sign In page

        <div className='SignIn__box'>
          <FloatingLabel
            id='username'
            name='Username'
            placeholder='Email'
            type='text'
          />

          <FloatingLabel
            id='password'
            name='Password'
            placeholder='Password'
            type='password'
          />
          <button>Sign In</button>
        </div>
      </div>
    );
  }
}

SignIn.wrappedComponent.propTypes = {
  CounterStore: PropTypes.object.isRequired,
};

export default SignIn;
