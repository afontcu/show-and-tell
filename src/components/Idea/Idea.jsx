import React from 'react';
import './Idea.css';

class Idea extends React.Component {

  render() {
    return (
      <li
        className={"Idea " + (this.props.isUpvoted ? 'Idea--upvoted' : '')}
        onClick={this.props.onClick}>
        <p className="Idea__summary">{this.props.summary} (by {this.props.userName})</p>
        <div className="Idea__upvotes">{this.props.upvotes}</div>
      </li>
    );
  }
}

export default Idea;