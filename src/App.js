import React, { Component } from 'react';
import './App.css';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import IdeaList from './components/IdeaList';
import SubmitIdea from './components/SubmitIdea';

const client = new ApolloClient({
  dataIdFromObject: (o => o.id),
  networkInterface: createNetworkInterface({
    uri: 'http://192.168.8.237:8000/graphql'
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
          <SubmitIdea />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
