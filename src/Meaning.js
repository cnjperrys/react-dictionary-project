import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning (props) {

 return (
    <div className="Meaning">
        <h3 className="partOfSpeech">{props.meaning.partOfSpeech}</h3>
        <div className="definition">
        <p>
            <strong>Definition: </strong>
            {props.meaning.definition}
            <br />
            <em>{props.meaning.example}</em>
            <br />
            </p>
            <div className="Synonyms"> <Synonyms synonyms={props.meaning.synonyms} /> </div>
        </div>
        </div>
 );
}