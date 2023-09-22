import React from "react";
import {Link} from "react-router-dom";
import { deleteDeck } from "../utils/api";


function DeckCard({deck, fetchData}){
// used when delete is clicked. This will pop a window for confirmation, then delete
    const deckDeleteHandler = ()=>{if(window.confirm("Delete this deck?\n You will not be able to recover it")){
        deleteDeck(deck.id)
        .then(fetchData)
    }}

    // returns a single deck card
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="d-inline-block card-title">{deck.name}</h4>
                <h6 class="d-inline-block card-subtitle float-right text-muted">{deck.cards.length} cards</h6>                             
                <p class="card-text">
                {deck.description}
                </p>
                {/* buttons that link to appropriate function */}
            <Link to={`/decks/${deck.id}`} class="btn btn-secondary mr-2">View</Link>
            <Link to={`/decks/${deck.id}/study`} class="btn btn-primary">Study</Link>
            {/* delete button that references delete handler then reloads decklist */}
            <button 
            class="btn btn-danger mr-4 float-right" 
            onClick={deckDeleteHandler}>
                Delete
            </button>
        </div>
        </div>
    )
}

export default DeckCard;