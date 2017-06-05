import React from 'react';
import './Idea.css';
const nl2br = require('react-nl2br');

function Idea(props) {
  return (
    <div
      className={"Idea " + (props.isUpvoted ? 'Idea--upvoted' : '')}
      onClick={props.onClick}>
      <span className="Idea__header">
        <p className="Idea__summary">{props.summary} (by {props.userName})</p>
        <div className="Idea__upvotes">{props.upvotes}</div>
      </span>
      <p>{nl2br(props.explanation)}</p>
    </div>
  );

}

export default Idea;