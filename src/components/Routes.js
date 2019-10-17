import React from 'react';
import { Navigation } from './Navigation';
import { Switch, Route } from "react-router-dom";
import { LoginWithRouter as Login } from './Login';
import { Logout } from './Logout';
import { Conversations } from './Conversations';
import { auth } from '../services/auth'

export const Routes = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route exact path="/conversations" component={Conversations} />
        <Route path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route path='/logout/sso' component={() => {
            window.location = auth.logoutUri()
            return null
          }
        }/>
      </Switch>
    </div>
  );
};
