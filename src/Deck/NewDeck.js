import React from "react";
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import { Link } from "react-router-dom/cjs/react-router-dom";
function NewDeck(){

    return(
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>                
            </ol>
        </nav>
        {/* calls the form with blank fields and then uses the createDeck API call on submit */}
        <DeckForm 
            onSubmit={createDeck}
            submitButtonText="Submit"
             initialFormData={ {
            name: '',
            description: '',
            } }/>
    </div>
    )}

export default NewDeck;