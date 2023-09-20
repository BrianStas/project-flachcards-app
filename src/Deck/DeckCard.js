import React from "react";
import {Link} from "react-router-dom";
import { deleteDeck } from "../utils/api";


function DeckCard({deck}){
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{deck.name}</h4>
                <p class="card-text">
                {deck.description}
                </p>
            <Link to={`/decks/${deck.id}`} class="btn btn-secondary">View</Link>
            <Link to={`/decks/${deck.id}/study`} class="btn btn-primary">Study</Link>
            <button 
            class="btn btn-danger mr-4 float-right" 
            onClick={()=> deleteDeck(deck.id)}>
                Delete
            </button>
        </div>
        </div>
    )
}

export default DeckCard;