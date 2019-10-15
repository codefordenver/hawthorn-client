import React from 'react';
import { Navigation } from './Navigation';
import { Switch, Route } from "react-router-dom";
import { LoginWithRouter as Login } from './Login';
import { About } from './About';
import { Conversations } from './Conversations';
import { Users } from './Users';

export const Routes = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Conversations} />
        <Route path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/users" component={Users} />
      </Switch>
    </div>
  );
};
