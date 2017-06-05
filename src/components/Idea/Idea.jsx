import React, { Component } from 'react';
import './Idea.css';
import { gql, graphql } from 'react-apollo';
// const nl2br = require('react-nl2br');


class Idea extends Component {

  handleClick() {
    this.props.mutate({
      variables: { ideaID: this.props.idea.id }
    })
    .then(({ data }) => {
        console.log('got data', data);
    }).catch((error) => {
        console.log('there was an error sending the query', error);
    });
  }


  render() {
    let idea = this.props.idea;
    return (
      <li className="Idea" onClick={this.handleClick.bind(this)}>
        <p className="Idea__summary">{idea.summary} (by {idea.userName})</p>
        <div className="Idea__upvotes">{idea.upvotes}</div>
        {/*<p className="Idea__explanation">{nl2br(idea.explanation)}</p>*/}
      </li>
    );
  }
}


const upvote = gql`
  mutation IdeaVoteMutation ($IdeaID: String!) {
    upvoteIdea(input: { id: $IdeaID }) {
      idea {
          upvotes
      }
    }
  }
`;

export default graphql(upvote)(Idea);