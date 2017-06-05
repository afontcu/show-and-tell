import React from 'react';
import './Idea.css';

function Idea(props) {
  return (
    <li
      className={"Idea " + (props.isUpvoted ? 'Idea--upvoted' : '')}
      onClick={props.onClick}>
      <p className="Idea__summary">{props.summary} (by {props.userName})</p>
      <div className="Idea__upvotes">{props.upvotes}</div>
    </li>
  );

}

export default Idea;