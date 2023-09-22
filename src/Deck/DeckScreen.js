import React from "react";
import { useState, useEffect } from "react";
import { deleteDeck, readDeck } from "../utils/api";
import { useParams, Link, Switch, useRouteMatch, Route, useHistory} from "react-router-dom/cjs/react-router-dom";
import CardDisplay from "../Cards/CardDisplay"
import NewCard from "../Cards/NewCard";
import EditCard from "../Cards/EditCard";

function DeckScreen(){
    /*first we call the history for later use, and we pull deck ID from the parameters.
    we then set the deck prop to use for edits and card additions. 
    Finally, we pull the card list once we confirm the deck has fully loaded from API*/
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
    //window prompt to delete, and then the user is pushed back to home page
      const deckDeleteHandler = ()=>{if(window.confirm("Delete this deck?\n You will not be able to recover it")){
        deleteDeck(deck.id)
        .then(data=> history.push("/"))
    }}

    //first check to make sure the deck is fully loaded
      if(deck.id){
    return(<div>
        {/* switch to decipher if we show the deck, or we show the EditCard or NewCard.
        this was done because they share the same general path and I thought it'd make
        the API calls easier to handle. It made its own issues. */}
        <Switch>
            <Route exact path={path}>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>                
            </ol>
        </nav>
        {/* first returns the buttons to click for the deck itself */}
        <div class="mb-4">
            <h3>{deck.name}</h3>
            <p>{deck.description}</p>
            <Link to={`/decks/${deck.id}/edit`} class="btn btn-secondary mx-2">Edit</Link>
            <Link to={`/decks/${deck.id}/study`} class="btn btn-primary ">Study</Link>
            <Link to={`/decks/${deck.id}/cards/new`} class="btn btn-primary mx-2">Add Cards</Link>
            <button class="btn btn-danger mr-4 float-right" onClick={deckDeleteHandler}>Delete</button>
        </div>
{/* then returns each individual card, showing front and back for clarity */}
        {cardList.length>0 ? cardList.map((card)=> <CardDisplay card={card} deck={deck} fetchDeck= {fetchDeck}/>) : null}
        </Route>
        {/* this will lead the user to either newCard form or EditCard form */}
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