import React from "react";
import DeckCard from "./DeckCard";

function DeckList({decks}){
    

    return (
        <div>
           {decks.map(deck=>
           <DeckCard deck={deck} />)} 
        </div>
    )
}

export default DeckList;