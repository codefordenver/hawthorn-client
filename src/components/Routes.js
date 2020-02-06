import React from 'react';
import { withRouter } from "react-router"
import { useQuery } from '@apollo/react-hooks';
import { errorHandler } from '../services/graphql/errorHandler'
import { FUSIONAUTH_CONFIG } from '../services/graphql/queries'
import { Switch, Route } from "react-router-dom";
import { About } from './About';
import Account from './Account';
import { CodeOfConduct } from './CodeOfConduct';
import { ContactForm } from './ContactForm';
import { Group } from './Group';
import { Groups } from './Groups';
import { Header } from './Header';
import { Index } from './Index';
import Login from './Login';
import Logout from './Logout';
import { Navigation } from './Navigation';
import NetworkError from './NetworkError';
import Register from './Register';
import { Thread } from './Thread';

export const Routes = withRouter((props) => {
  // Retrieve authorization config from the server so we can build auth URIs
  var { loading, error, data } = useQuery(FUSIONAUTH_CONFIG,
  {
    onError(error) {
       errorHandler(error, props.history)
    }
  })
  if (loading) {
    return <p>Loading</p>
  }
  if (error) {
    return <NetworkError />
  }

  const configuration = {
    fusionAuth: data.fusionAuthConfig
  }

  const authorizeUri = encodeURI(`${configuration.fusionAuth.endpoint}/oauth2/authorize?client_id=${configuration.fusionAuth.clientId}&redirect_uri=${configuration.fusionAuth.redirectUri}&response_type=code&scope=offline_access`)
  const logoutUri = encodeURI(`${configuration.fusionAuth.endpoint}/oauth2/logout?client_id=${configuration.fusionAuth.clientId}&tenantId=${configuration.fusionAuth.tenantId}`)

  return (
    <main role="main" className="container-fluid">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/about" component={About} />
        <Route exact path="/code-of-conduct" component={CodeOfConduct} />
        <Route exact path="/contact-us" component={ContactForm} />
        <Route path="/community/:groupId" component={Group} />
        <Route exact path='/communities' component={Groups} />
        <Route exact path="/login" component={Login}><Login authorizeUri={authorizeUri} /></Route>
        <Route exact path="/logout" component={Logout} />
        <Route exact path='/logout/sso' component={() => {
            window.location = logoutUri
            return null
          }
        }/>
        <Route path="/register" component={Register} />
        <Route path="/thread/:threadId" component={Thread} />
      </Switch>
    </main>
  );
});
