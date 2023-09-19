import React from "react";

function CardDisplay({card}){
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
            </div>
        </div>
    </div>
)}

export default CardDisplay;