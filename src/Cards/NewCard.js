import React from "react";
import { createCard, readDeck } from "../utils/api";
import CardForm from "./CardForm";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import { useState, useEffect } from "react";

function NewCard({deck}){

    return(
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                <li class="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li>
                <li class="breadcrumb-item active" aria-current="page">Add Card</li>
            </ol>
        </nav> 
        <CardForm 
            onSubmit={createCard}
            submitButtonText="Save"
            cancelButtonText="Done"
             initialFormData={ {
            front: '',
            back: '',
            } }/>
    </div>
    )}

export default NewCard;