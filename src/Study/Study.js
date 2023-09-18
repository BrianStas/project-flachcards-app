import React, { useState, useEffect } from "react";
import { readCard, readDeck } from "../utils/api";
import {useParams, Link} from "react-router-dom";

function Study(){
    const {deckId} = useParams();
    const [deck, setDeck] = useState({})
    function fetchDeck() {
        readDeck(deckId).then(data => setDeck(data));
      }
      useEffect(fetchDeck, []);

    const [cardToStudy, setCardToStudy]= useState({});
    const [cardId, setCardId] = useState(1);
    function fetchCard() {
        readCard(cardId).then(data => setCardToStudy(data));
      }
      useEffect(fetchCard, []);

    const [isLast, setIsLast] = useState(false);
    const [isBack, setIsBack] = useState(false);
    
    return (
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Study</li>
            </ol>
        </nav>  
        <h1>Study: {deck.name}</h1> 
        <div class="card"> 
            <div class="card-body">
                <h4 class="card-title">Card {cardId} of 3</h4>
                <p class="card-text">
                {cardToStudy.front}
                </p>
                <a href="#!" class="btn btn-primary">Flip</a>
            </div>
        </div>
    </div>
    )
}

export default Study;