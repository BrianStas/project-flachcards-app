import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function CreateDeck(){
    
    return (
    <div class="w-100">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>                
            </ol>
        </nav>
        <form>
            <div class="form-group">
            <label htmlFor="name">
                Name
            </label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Deck Name" />
            </div>
            <div class="form-group">
            <label htmlFor="description">
                Description  
            </label>
            <textarea id="description" class="form-control" name="description" rows={7} placeholder="Brief description of the deck" />            
            </div>
        </form>
    </div>)}

export default CreateDeck;