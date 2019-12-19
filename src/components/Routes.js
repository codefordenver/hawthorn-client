import React from 'react';
import { withRouter } from "react-router"
import { Switch, Route } from "react-router-dom";
import { About } from './About';
import { CodeOfConduct } from './CodeOfConduct';
import { Group } from './Group';
import { Groups } from './Groups';
import { Header } from './Header';
import { Thread } from './Thread';

export const Routes = withRouter((props) => {
  return (
    <main role="main" class="container">
      <Header />
      <Switch>
        <Route exact path='/' component={Groups} />
        <Route exact path="/about" component={About} />
        <Route exact path="/code-of-conduct" component={CodeOfConduct} />
        <Route path="/group/:groupId" component={Group} />
        <Route path="/thread/:threadId" component={Thread} />
      </Switch>
    </main>
  );
});
