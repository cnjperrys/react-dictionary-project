import React from "react";

export default function Phonetic(props){
    return(
        <div className="Phonetic">
        <a href={props.phonetid.audio} rel="noopener">
            Listen
            </a>
            <span className="text">{props.phonetic.text}</span>
        </div>
    );
}