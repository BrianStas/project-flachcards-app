import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api";

function Study(){
    const [deckToStudy, setDeckToStudy]= useState({});
    function fetchData() {
        readDeck().then(data => setDeckToStudy(data));
      }
      useEffect(fetchData, []);
    const [isLast, setIsLast] = useState(false);
    const [isBack, setIsBack] = useState(false);
    
}

export default Study;