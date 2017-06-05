import React from 'react';
import './SubmitIdea.css';

function SubmitIdea(props) {
    return (
    <div>
        <br /><br />
        <h2>Submit a new Idea</h2>
        <form className="SubmitIdea" action="#" onSubmit={props.onSubmit}>
            <input 
                className="SubmitIdea__input"
                required
                type="text" 
                value={props.userName}
                onChange={props.handleInputChange}
                name="userName"
                placeholder="Who are you?" />
            <input
                className="SubmitIdea__input"
                required
                type="text" 
                value={props.summary}
                onChange={props.handleInputChange}
                name="summary"
                placeholder="What is your idea?" />
            <textarea
                className="SubmitIdea__input"
                required
                value={props.explanation}
                onChange={props.handleInputChange}
                name="explanation"
                placeholder="Describe it in a few words" />
            <input 
                className="SubmitIdea__button"
                type="submit"
                value="Submit Idea" />
        </form>
    </div>
    );
}

export default SubmitIdea;