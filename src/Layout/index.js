import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import DeckScreen from "../Deck/DeckScreen";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Study from "../Study/Study";
import NewDeck from "../Deck/NewDeck";
import EditDeck from "../Deck/EditDeck";
import NewCard from "../Cards/NewCard";
import EditCard from "../Cards/EditCard";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
      
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>         
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/new">
            <NewDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckScreen />
          </Route>          
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
