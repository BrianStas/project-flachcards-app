import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function DeckForm({initialFormData, onSubmit, submitButtonText}){
    
    const [formData, setFormData]=useState(initialFormData)
    
    function handleInput(event){
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        onSubmit(formData);
    }

    return (
    <div class="w-100">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>                
            </ol>
        </nav>
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
                value={name}
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
                value={description}
                placeholder="Brief description of the deck" />            
            </div>
            <button type="submit">{submitButtonText}</button>
        </form>
    </div>)}

export default DeckForm;