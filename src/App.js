import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './components/Routes';

const client = new ApolloClient({
  uri: 'http://localhost:4000'
});

function App(props) {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Routes />
          </header>
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
