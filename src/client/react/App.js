import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

import { imageRequire } from '../../utils/universalRequire';
// for the server return a reference to the
// path for this image. Otherwise, deal with
// it as a normal webpack import

export default class App extends Component {
  render() {
    // This is the newer example showing a better way to manage
    // tabs / page sections using something like react-router
    // instead of the contrived last example

    return (
      <div>
        <IndexLink to="/">User Profile</IndexLink>
        <Link to="/signIn">Sign In</Link>
        <Link to='/binders'>Binders</Link>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};
