import React from 'react';
import './Idea.css';
const nl2br = require('react-nl2br');

function Idea(props) {
  return (
    <div
      className={"Idea " + (props.isUpvoted ? 'Idea--upvoted' : '')}
      onClick={props.onClick}>
      <div className="Idea__header">
        <div>
          <p className="Idea__summary">{props.summary}</p>
          <p className="Idea__metainfo">
            (proposada per <span className="Idea__author">{props.userName}</span>)
          </p>
        </div>
        <div className="Idea__upvotes">{props.upvotes}</div>
      </div>
      <p className="Idea__explanation">{nl2br(props.explanation)}</p>
    </div>
  );

}

export default Idea;