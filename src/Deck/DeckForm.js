import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function DeckForm({initialFormData, onSubmit, submitButtonText}){
    
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
            history.push("/"))
        }
        //     createDeck(newDeck).then(data => history.push(`/decks/${data.id}`));

    return (
    <div class="w-100">
        
        <form onSubmit={handleSubmit}>
            <div class="form-group">
            <label htmlFor="name">
                Name
            </label>
            <input 
                type="text" 
                class="form-control" 
                id="name" 
                name="name" 
                onChange={handleInput}
                value={formData.name}
                placeholder="Deck Name" />
            </div>
            <div class="form-group">
            <label htmlFor="description">
                Description  
            </label>
            <textarea 
                id="description" 
                class="form-control" 
                name="description" 
                rows={7} 
                onChange={handleInput}
                value={formData.description}
                placeholder="Brief description of the deck" />            
            </div>
            <button type="submit">{submitButtonText}</button>
        </form>
    </div>)}

export default DeckForm;