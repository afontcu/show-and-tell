import React from 'react';
import { graphql } from 'react-apollo';
import SubmitIdea from './SubmitIdea';
import { IdeaListQuery } from '../../queries/IdeaListQuery';
import { CreateIdeaMutation } from '../../queries/CreateIdeaMutation';

class SubmitIdeaContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.createBlankState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createBlankState() {
    return {
      userName: '',
      summary: '',
      explanation: ''
    };
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();

    this.props.mutate({
      variables: {
        userName: this.state.userName,
        summary: this.state.summary,
        explanation: this.state.explanation
      },
      update: (store, { data: { createIdea } }) => {
        // Read the data from our cache for this query.
        const data = store.readQuery({ query: IdeaListQuery });

        // Add our comment from the mutation to the end.
        data.allIdeas.edges.push(createIdea.ideaEdge);

        // Write our data back to the cache.
        store.writeQuery({ query: IdeaListQuery, data });
      }
    })
    .then(({ data }) => {
      console.log('ok', data);

      this.setState(this.createBlankState());
    })
    .catch((error) => {
        console.log('there was an error sending the query', error);
    });
  }

  render() {
      return (
          <SubmitIdea
            handleInputChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            userName={this.state.userName}
            summary={this.state.summary}
            explanation={this.state.explanation}
          />
      );
  }
}

export default graphql(CreateIdeaMutation)(SubmitIdeaContainer);