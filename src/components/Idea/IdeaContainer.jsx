import React from 'react';
import Idea from './Idea';
import { graphql, compose } from 'react-apollo';
import { UpvoteIdeaMutation, DownvoteIdeaMutation } from '../../queries/VoteIdeaMutation';

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

  toggleVotedState() {
    const isUpvoted = !this.state.isUpvoted;
    this.setState({isUpvoted});

    const itemKey = LOCAL_STORAGE_PREFIX + this.props.idea.id;
    if (isUpvoted) {
      window.localStorage.setItem(itemKey, LOCAL_STORAGE_UPVOTED_VALUE);
    } else {
      window.localStorage.removeItem(itemKey);
    }
  }

  handleClick() {
    let fn = this.props.UpvoteIdeaMutation;
    if (this.hasBeenUpvoted()) {
      fn = this.props.DownvoteIdeaMutation;
    }

    fn({variables: { IdeaID: this.props.idea.id }})
    .then(() => {
      this.toggleVotedState();
    })
    .catch((error) => {
      console.log('there was an error sending the query', error);
    });
  }

  render() {
    return (
      <Idea
        isUpvoted={this.state.isUpvoted}
        upvotes={this.props.idea.upvotes}
        summary={this.props.idea.summary}
        explanation={this.props.idea.explanation}
        userName={this.props.idea.userName}
        onClick={this.handleClick}
      />
    );
  }
}

export default compose(
  graphql(UpvoteIdeaMutation, { name: 'UpvoteIdeaMutation' }),
  graphql(DownvoteIdeaMutation, { name: 'DownvoteIdeaMutation' })
)(IdeaContainer);