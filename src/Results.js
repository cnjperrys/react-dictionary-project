import React from "react";
import Meaning from "./Meaning";




export default function Results(props){
      if (props.results) {
      return (
        <div className="Results">
            <section>
        <h2>{props.results.word}</h2>
        
        <em><h4><small>{props.results.phonetic}</small></h4></em>
            </section>
            {props.results.meanings.map(function (meaning, index) {
                    return (
                     <section key={index}>
                              <Meaning meaning={meaning} /> 
            </section>
                 
                 );                      
              })}
         </div>
      );      
} else {
    return null;
} 
}