import React from "react";
import { useState, useEffect } from "react";
import { deleteDeck, readDeck } from "../utils/api";
import { useParams, Link, Switch, useRouteMatch, Route, useHistory} from "react-router-dom/cjs/react-router-dom";
import CardDisplay from "../Cards/CardDisplay"
import NewCard from "../Cards/NewCard";
import EditCard from "../Cards/EditCard";

function DeckScreen(){
    const history=useHistory();
    const {deckId} = useParams();
    const [deck, setDeck] = useState({cards:[]})
    function fetchDeck() {
        readDeck(deckId).then(data => setDeck(data));
      }
      useEffect(fetchDeck, []);
      const cardList = (deck.id && deck.cards);
      console.log(cardList);

      const {path} = useRouteMatch();
    
      const deckDeleteHandler = ()=>{if(window.confirm("Delete this deck?\n You will not be able to recover it")){
        deleteDeck(deck.id)
        .then(data=> history.push("/"))
    }}
      if(deck.id){
    return(<div>
        <Switch>
            <Route exact path={path}>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>                
            </ol>
        </nav>
        <div class="mb-4">
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <Link to={`/decks/${deck.id}/edit`} class="btn btn-secondary mx-2">Edit</Link>
            <Link to={`/decks/${deck.id}/study`} class="btn btn-primary ">Study</Link>
            <Link to={`/decks/${deck.id}/cards/new`} class="btn btn-primary mx-2">Add Cards</Link>
            <button class="btn btn-danger mr-4 float-right" onClick={deckDeleteHandler}>Delete</button>
        </div>

        {cardList.length>0 ? cardList.map((card)=> <CardDisplay card={card} deck={deck} fetchDeck= {fetchDeck}/>) : null}
        </Route>
        <Route path={`${path}/cards/new`}>
            <NewCard deck={deck} fetchDeck={fetchDeck} />
        </Route>
        <Route path={`${path}/cards/:cardId/edit`}>
            <EditCard deck={deck} fetchDeck= {fetchDeck}/>
        </Route>
        </Switch>
    </div>)
    }
return "Loading..."}

export default DeckScreen