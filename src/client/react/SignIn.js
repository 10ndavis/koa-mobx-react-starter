import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject("CounterStore") @observer
class SignIn extends Component {


  render() {
    return (
      <div>
        Sign In page
      </div>
    );
  }
}

SignIn.wrappedComponent.propTypes = {
  CounterStore: PropTypes.object.isRequired,
};

export default SignIn;
