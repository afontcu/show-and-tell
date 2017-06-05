import React from 'react';
import Idea from './Idea';
import { graphql } from 'react-apollo';
import { UpvoteIdeaMutation } from '../../queries/UpvoteIdeaMutation';
// const nl2br = require('react-nl2br');

const LOCAL_STORAGE_PREFIX = 'voted-item-';
const LOCAL_STORAGE_UPVOTED_VALUE = 'upvoted';

class IdeaContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isUpvoted: this.hasBeenUpvoted()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  hasBeenUpvoted() {
    return LOCAL_STORAGE_UPVOTED_VALUE ===
      window.localStorage.getItem(LOCAL_STORAGE_PREFIX + this.props.idea.id);
  }

  handleClick() {
    if (!this.hasBeenUpvoted()) {
      this.props.mutate({
        variables: { IdeaID: this.props.idea.id }
      })
      .then(() => {
          window.localStorage.setItem(
            LOCAL_STORAGE_PREFIX + this.props.idea.id,
            LOCAL_STORAGE_UPVOTED_VALUE
          );

          this.setState({
            isUpvoted: true
          });
      })
      .catch((error) => {
          console.log('there was an error sending the query', error);
      });
    } else {
      alert("ke ases payaso");
    }
  }

  render() {
    return (
        <Idea
            isUpvoted={this.state.isUpvoted}
            upvotes={this.props.idea.upvotes}
            summary={this.props.idea.summary}
            userName={this.props.idea.userName}
            onClick={this.handleClick}
        />
    );
  }
}

export default graphql(UpvoteIdeaMutation)(IdeaContainer);