import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function CardDisplay({card, deck}){
    return(
    <div class="card">
        <div class="card-body d-flex">
            <div class="col">
                <p class="card-text">
                {card.front}
                </p>
            </div>
            <div class="col">
                <p class="card-text">{card.back}</p>
                <button type="button" class="btn btn-danger float-right">Delete</button>
                <Link 
                to={`/decks/${deck.id}/cards/${card.id}/edit`} 
                class= "btn btn-secondary float-right">
                    Edit
                    </Link>
            </div>
        </div>
    </div>
)}

export default CardDisplay;