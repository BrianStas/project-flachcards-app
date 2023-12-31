import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function DeckForm({initialFormData, onSubmit, submitButtonText}){
    // 3 props to handle the initial form and what happens on submit
    const history = useHistory();
    const [formData, setFormData]=useState(initialFormData)
// tracks the input as a user types to then use for submit
    function handleInput(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
// sends the form data to use onSubmit from EditDeck or NewDeck then pushes user to deckScreen
    function handleSubmit(event){
        event.preventDefault();
        onSubmit(formData)
        .then(data =>
            history.push(`/decks/${data.id}`))
        }
// returns form for Name and Description. This will be filled in for EditDeck use.
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