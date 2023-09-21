import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";

function CardForm({initialFormData, onSubmit, submitButtonText, cancelButtonText}){
    const history = useHistory();
    const [formData, setFormData]=useState(initialFormData)
    
    function handleInput(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        onSubmit(formData)
        .then(data =>
            history.push(`/decks/${data.id}`))
        }
        //     createDeck(newDeck).then(data => history.push(`/decks/${data.id}`));

    return (
    <div class="w-100">
        
        <form onSubmit={handleSubmit}>
            <div class="form-group">
            <label htmlFor="front">
                Front
            </label>
            <textarea 
                id="front" 
                class="form-control" 
                name="front" 
                rows={5} 
                onChange={handleInput}
                value={formData.front}
                placeholder="Front side of card" /> 
            </div>
            <div class="form-group">
            <label htmlFor="back">
                Back
            </label>
            <textarea 
                id="back" 
                class="form-control" 
                name="back" 
                rows={5} 
                onChange={handleInput}
                value={formData.back}
                placeholder="Back side of card" />            
            </div>
            <button type="button" class="btn btn-secondary mr-3">{cancelButtonText}</button>
            <button type="submit" class="btn btn-primary">{submitButtonText}</button>           
        </form>
    </div>)
}

export default CardForm;