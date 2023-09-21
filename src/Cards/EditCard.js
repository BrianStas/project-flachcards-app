import React from "react";
import { readCard, updateCard } from "../utils/api";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import CardForm from "./CardForm";

function EditCard({deck}){

    const {cardId} = useParams();
    
    const [card, setCard] = useState();
    function fetchCard() {
        readCard(cardId).then(data => setCard(data));
        console.log("this is working")
      }
    useEffect(fetchCard, []);
 console.log(card)
    return (
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Edit card {cardId}</li>
            </ol>
        </nav>
        {card?.id &&
        <CardForm
            onSubmit={updateCard}
            submitButtonText="Submit"
            cancelButtonText="Cancel"
            initialFormData={card}/>
        }
    </div>
    )
}

export default EditCard;