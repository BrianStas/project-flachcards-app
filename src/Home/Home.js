import React from "react";
import DeckList from "../Deck/DeckList";
import { listDecks } from "../utils/api";
import { useState, useEffect } from "react";

function Home(){
    const [decks, setDecks] = useState([]);
  function fetchData() {
    listDecks().then(data => setDecks(data));
  }
  useEffect(fetchData, []);
 console.log(decks)
   return (
   <div>
        <button type="button" class="btn btn-secondary">+ Create Deck</button>
        <DeckList decks={decks}/>
    </div>
)}

export default Home;