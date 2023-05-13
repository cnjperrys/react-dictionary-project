import React from "react";
import Meaning from "./Meaning";


export default function Results(props){
      if (props.results) {
      return (
    <div className="Results">
        <h2>(props.results.word)</h2>
        {props.results.map(function (definition, index){
            return (
                <div key={index}>
                    <h2>{definition.word}</h2>
                    {definition.meanings.map(function (meaning, index) {
                        return  <Meaning meaning={meaning} />
                    })}
                </div>
        );
                      
    })}  

    </div>
 );
} else {
    return null;
} 
}


