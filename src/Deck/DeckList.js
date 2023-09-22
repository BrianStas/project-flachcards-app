import React from "react";
import DeckCard from "./DeckCard";

function DeckList({decks, fetchData}){
    
// returns a map of all decks in {decks} which is the value returned from the API in Home.
    return (
        <div>
           {decks.map(deck=>
           <DeckCard deck={deck} fetchData={fetchData} />)} 
        </div>
    )
}

export default DeckList;