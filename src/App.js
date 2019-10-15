import React from 'react';
import './App.css';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';
import { Routes } from './components/Routes';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  cache: new InMemoryCache()
});

function App(props) {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <Routes />
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
