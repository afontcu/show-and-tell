import React from 'react';
import './SubmitIdea.css';

function SubmitIdea(props) {
    return (
    <form className="SubmitIdea" action="#" onSubmit={props.onSubmit}>
        <h2 className="SubmitIdea__title">Proposa un nou Show&Tell</h2>
        <input 
            className="SubmitIdea__input"
            required
            type="text" 
            value={props.userName}
            onChange={props.handleInputChange}
            name="userName"
            placeholder="Qui ets?" />
        <input
            className="SubmitIdea__input"
            required
            type="text" 
            value={props.summary}
            onChange={props.handleInputChange}
            name="summary"
            placeholder="Quina idea tens?" />
        <textarea
            className="SubmitIdea__input"
            required
            value={props.explanation}
            onChange={props.handleInputChange}
            name="explanation"
            rows="5"
            placeholder="Descriu-la en poques paraules" />
        <input 
            className="SubmitIdea__button"
            type="submit"
            value="Envia la idea!" />
    </form>
    );
}

export default SubmitIdea;