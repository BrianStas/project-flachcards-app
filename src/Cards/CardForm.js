import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";

function CardForm({formData, setFormData, onSubmit, submitButtonText, cancelButtonText, deck}){
    const history = useHistory();
    
    // tracks the input for when the submit occurs
    function handleInput(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
// calls the onSubmit prop to be handled by either EditCard or NewCard
    function handleSubmit(event){
        event.preventDefault();
        onSubmit(formData)
        
        }
// returns the card form for front side and back side of card.
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
            {/* the cancel button always sends you back to the deckScreen */}
            <button type="button" class="btn btn-secondary mr-3" onClick={()=>history.push(`/decks/${deck.id}`)}>{cancelButtonText}</button>
            {/* submit will be handled by EditCard or NewCard */}
            <button type="submit" class="btn btn-primary" >{submitButtonText}</button>           
        </form>
    </div>)
}

export default CardForm;