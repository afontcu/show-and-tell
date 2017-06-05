import React from 'react';

function SubmitIdea(props) {
    return (
    <div>
        <br /><br />
        <h2>Submit a new Idea</h2>
        <form action="#" onSubmit={props.onSubmit}>
            <input 
                required
                type="text" 
                value={props.userName}
                onChange={props.handleInputChange}
                name="userName"
                placeholder="Who are you?" />
            <input
                required
                type="text" 
                value={props.summary}
                onChange={props.handleInputChange}
                name="summary"
                placeholder="What is your idea?" />
            <input type="submit" value="Submit Idea" />
        </form>
    </div>
    );
}

export default SubmitIdea;