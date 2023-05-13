import React from "react";

export default function Meaning(props) {
 return (
    <div className="Meaning">
        <h3>{props.results.partOfSpeech}</h3>
        {props.results.definition.map(function (definition, index) {
            return (
                <div key={index}>
                    <p>
                    {definition.definition}
                    <br />
                   <em>{definition.example}</em>
                    </p>
                </div>
            );
        })}
    </div>
 );
}