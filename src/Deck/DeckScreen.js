import React from "react";
import { useState, useEffect } from "react";
import { readDeck } from "../utils/api";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom";
import CardDisplay from "../Cards/CardDisplay"

function DeckScreen(){
    const {deckId} = useParams();
    const [deck, setDeck] = useState({cards:[]})
    function fetchDeck() {
        readDeck(deckId).then(data => setDeck(data));
      }
      useEffect(fetchDeck, []);
      const cardList = (deck.id && deck.cards);
      console.log(cardList);

    if(deck.id){
    return(<div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>                
            </ol>
        </nav>
        <div class="mb-4">
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <Link to="#" class="btn btn-secondary mx-2">Edit</Link>
            <Link to={`/decks/${deck.id}/study`} class="btn btn-primary ">Study</Link>
            <Link to="#" class="btn btn-primary mx-2">Add Cards</Link>
        </div>

        {cardList.length>0 ? cardList.map((card)=> <CardDisplay card={card} />) : null}

    </div>)
    }
return "Loading..."}

export default DeckScreen