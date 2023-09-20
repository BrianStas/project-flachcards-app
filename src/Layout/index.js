import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "../Home/Home";
import DeckScreen from "../Deck/DeckScreen";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Study from "../Study/Study";
import DeckForm from "../Deck/DeckForm";

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
          <Route exact path="/decks/new">
            <DeckForm />
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
