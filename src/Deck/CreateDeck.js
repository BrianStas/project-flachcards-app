import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

function CreateDeck(){
    
    return (
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>                
            </ol>
        </nav>
        <form>
      <label htmlFor="name">
        Enter Your Name:
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="email">
        Your Email:
        <input id="email" type="email" name="email" />
      </label>
    </form>
    </div>)}

export default CreateDeck;