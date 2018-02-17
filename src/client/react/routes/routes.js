import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import UserProfile from '../UserProfile';
import SignIn from '../SignIn';
import Binders from '../Containers/Binders/Binders.js';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={UserProfile}/>
    <Route path="/signIn" component={SignIn}/>
    <Route path='/binders' component={Binders}/>
  </Route>
);

export default routes;
