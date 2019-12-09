import React from 'react';
import { withRouter } from "react-router"
import { Switch, Route } from "react-router-dom";
import { About } from './About';
import { Group } from './Group';
import { Groups } from './Groups';
import { Header } from './Header';
import { Thread } from './Thread';

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
        <Route exact path="/groups" component={Groups} />
        <Route path="/group/:groupId" component={Group} />
        <Route path="/thread/:threadId" component={Thread} />
      </Switch>
    </main>
  );
});
