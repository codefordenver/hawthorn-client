import React from 'react';
import { withRouter } from "react-router"
import { Switch, Route } from "react-router-dom";
import { About } from './About';
import { AddThread } from './AddThread';
import { Conversations } from './Conversations';
import { Header } from './Header';

export const Routes = withRouter((props) => {
  return (
    <main role="main" class="container">
      <Header />
      <Switch>
        <Route exact path='/' component={() => {
            {/* Until launch of affinity groups, redirect the root route to the /about (hey! that rhymes!) */}
            window.location = '/about'
            return null
          }
        }/>
        <Route exact path="/about" component={About} />
        <Route exact path="/groups" component={Conversations} />
        <Route exact path="/thread" component={AddThread} />
      </Switch>
    </main>
  );
});
