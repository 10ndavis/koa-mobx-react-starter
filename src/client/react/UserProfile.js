import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject("UserStore") @observer
export default class UserProfile extends Component {

  constructor(props) {
    super(props);

    // This :: thing is the "bind operator" that is currently being proposed
    // for next javascript releases. It is essentially the same
    // as adding .bind(this) to the end of a function. We need to bind
    // our function to make sure that it runs in the context of the
    // UserStore
    this._getUserInfo = ::this.props.UserStore.getUserInfo;
  }

  render() {
    const { userProfile } = this.props.UserStore;

    return (
      <div>
        User Profile
        <button onClick={()=>{ console.log('clicked'); this._getUserInfo(); }}>Get Token</button>
      </div>
    );
  }
}

UserProfile.wrappedComponent.propTypes = {
  UserStore: PropTypes.object.isRequired,
};
