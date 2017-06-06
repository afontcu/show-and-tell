import React, { Component } from 'react';
import './App.css';
import { ApolloClient, createNetworkInterface, ApolloProvider } from 'react-apollo';
import IdeaList from './components/IdeaList';
import SubmitIdea from './components/SubmitIdea';
import Header from './components/Header';

const client = new ApolloClient({
  dataIdFromObject: (o => o.id),
  networkInterface: createNetworkInterface({
    uri: process.env.REACT_APP_APOLLO_CLIENT_URI
  }),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Header className="App__header" />
          <div className="App__content">
            <IdeaList />
            <SubmitIdea />
          </div>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
