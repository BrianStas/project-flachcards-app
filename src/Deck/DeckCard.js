import React from "react";
import {Link} from "react-router-dom";
import Study from "../Study/Study";

function DeckCard({deck}){
    return (
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{deck.name}</h4>
                <p class="card-text">
                {deck.description}
                </p>
            <Link to="#" class="btn btn-secondary">View</Link>
            <Link to={`/decks/${deck.id}/study`} class="btn btn-primary">Study</Link>
        </div>
        </div>
    )
}

export default DeckCard;