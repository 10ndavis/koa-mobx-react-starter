import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './React/App';

/*
 +*  This function is important for the crossover between server and client (isomorphic / universal).
 +*  It defines a single, identical starting point for ReactJS page layout on both sides.
 +* */

export function baseReact(options) {
  return (
    <AppContainer>
      <App />
    </AppContainer>
  );
}

// Check to ensure the client mounting code never runs from NODE because
// we need to access this file from the server for baseReact() above and
// this code will throw an error because of the undefined document variable
if (typeof document !== 'undefined') {
  const rootEl = document.getElementById('root');

  ReactDOM.render(
    baseReact(),
    rootEl
  );

  // This is required for React hot reloading, will be
  // turned off automatically for production
  if (module.hot) {
    module.hot.accept('./React/App', () => {
      ReactDOM.render(
        baseReact(),
        rootEl
      );
    });
  }
}
