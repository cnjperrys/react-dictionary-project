import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [newWord, setNewWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
      setResults(response.data);
    }

   function search(keyword) {
    let key="c922be1463d4549f3f9otcacf2b890af";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${newWord}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
   }

   function handleSubmit(event) {
      event.preventDefault();
      search();
   }
   
   function handleKeywordChange(event){
    setNewWord(event.target.value);
   }

   function load(){
    setLoaded(true);
    search();
   }
   if (loaded) {
    return (
    <div className="Dictionary">
        <h1>What would you like to search for?</h1>
        <section>
         <h2><strong>Dictionary</strong></h2>
        <form onSubmit={handleSubmit}>
            <input
             type="search"
             autoFocus={true}
             onChange={handleKeywordChange}
             defaultValue={props.defaultKeyword}/>
           </form> 
           <div className="hint">
            suggested words: tech, women, developer, SheCodes.io....
            </div>   
        </section>
           <Results results={results} /> 
          
        </div>
    );
   } else {
    load();
    return "Loading";

   }
   }



