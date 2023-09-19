import React from "react";
import DeckList from "../Deck/DeckList";
import { listDecks } from "../utils/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Home(){
    const [decks, setDecks] = useState([]);
  function fetchData() {
    listDecks().then(data => setDecks(data));
  }
  useEffect(fetchData, []);
 
   return (
   <div>
        <Link to="/decks/new" class="btn btn-secondary">+ Create Deck</Link>
        <DeckList decks={decks}/>
    </div>
)}

export default Home;