import React from 'react';
import { graphql } from 'react-apollo';
import SubmitIdea from './SubmitIdea';
import { IdeaListQuery } from '../../queries/IdeaListQuery';
import { CreateIdeaMutation } from '../../queries/CreateIdeaMutation';

class SubmitIdeaContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      summary: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        summary: this.state.summary
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

      this.setState({
        userName: '',
        summary: ''
      });
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
          />
      );
  }
}

export default graphql(CreateIdeaMutation)(SubmitIdeaContainer);