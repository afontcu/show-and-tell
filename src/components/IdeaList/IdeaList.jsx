import React from 'react';
import Idea from '../Idea';
import './IdeaList.css';

function IdeaList(props) {
    return (
    <div className="IdeaList">
        {props.list.edges.map((edge) => edge.node).map((idea) => {
            return <Idea key={idea.id} idea={idea} />;
        })}
    </div>
    );
}

export default IdeaList;