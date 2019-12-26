import React from 'react';
import { withRouter } from "react-router"
import { Switch, Route } from "react-router-dom";
import { About } from './About';
import { CodeOfConduct } from './CodeOfConduct';
import { ContactForm } from './ContactForm';
import { Group } from './Group';
import { Groups } from './Groups';
import { Header } from './Header';
import { Index } from './Index';
import { Navigation } from './Navigation';
import { Thread } from './Thread';

export const Routes = withRouter((props) => {
  return (
    <main role="main" className="container-fluid">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path="/about" component={About} />
        <Route exact path="/code-of-conduct" component={CodeOfConduct} />
        <Route exact path="/contact-us" component={ContactForm} />
        <Route path="/community/:groupId" component={Group} />
        <Route exact path='/communities' component={Groups} />
        <Route path="/thread/:threadId" component={Thread} />
      </Switch>
    </main>
  );
});
