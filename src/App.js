import React, { Component } from 'react';
import './App.css';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import IdeaList from './components/IdeaList';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://192.168.0.14:8000/graphql',
  }),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <div className="App__header">
            <h1>Ideatr</h1>
          </div>
          <IdeaList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
