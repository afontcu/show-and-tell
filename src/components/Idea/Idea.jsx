import React from 'react';
import './Idea.css';
const nl2br = require('react-nl2br');

function Idea(props) {
  return (
    <div
      className={"Idea " + (props.isUpvoted ? 'Idea--upvoted' : '')}
      onClick={props.onClick}>
      <span className="Idea__header">
        <div>
          <p className="Idea__summary">{props.summary}</p>
          <p className="Idea__author">(proposada per <strong>{props.userName}</strong>)</p>
        </div>
        <div className="Idea__upvotes">{props.upvotes}</div>
      </span>
      <p className="Idea__explanation">{nl2br(props.explanation)}</p>
    </div>
  );

}

export default Idea;