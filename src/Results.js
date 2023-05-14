import React from "react";
import Meaning from "./Meaning";


export default function Results(props){
      if (props.results) {
      return (
        <div className="Results">
            <div className="Results-header">
        <h3>{props.results.word}</h3>
        <span>{props.results.phonetic}</span>
            </div>
                    <section>
                    {props.results.meanings.map(function (meaning, index) {
                        return (
                            <div className="Definition" key={index}>
                              <Meaning meaning={meaning} /> 
                              </div> 
                        );                      
                    })}
                </section>
                    </div>
      );      
} else {
    return null;
} 
}