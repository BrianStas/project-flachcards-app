import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import {useParams, Link} from "react-router-dom";

function Study(){
    const {deckId} = useParams();
    const [deck, setDeck] = useState({cards:[]})
    function fetchDeck() {
        readDeck(deckId).then(data => setDeck(data));
      }
      useEffect(fetchDeck, []);

    const [cardText, setCardText]= useState("");
    const [cardIndex, setCardIndex] = useState(0);    
    const [isBack, setIsBack] = useState(false);
    
    const cardList = deck.cards;
      console.log(cardList)

    function cardFlip(){

    }
        
      
    function cardChange(){
        setCardIndex(cardIndex + 1);
        return (
            <p class="card-text">
            {deck.id && cardList[cardIndex].front}
            </p>
            

    )}

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
                <h4 class="card-title">Card {cardIndex +1} of {cardList.length}</h4>
                <p class="card-text">
                {deck.id && deck.cards[cardIndex].front}
                </p>
                <button class="btn btn-primary" onClick={()=> setIsBack(!isBack)}>{isBack ? "Next" : "Flip" }</button>
            </div>
        </div>
    </div>
    )
}

export default Study;