import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
      setResults(response.data);
    }

   function search(event) {
    event.preventDefault();
   
    let key=`c922be1463d4549f3f9otcacf2b890af`
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);
   }

   
   function handleKeywordChange(event){
    setKeyword(event.target.value);
   }

   function load(){
    setLoaded(true);
    search();
   }
   if (loaded) {
    return (
    <div className="Dictionary">
        <h1><strong>Dictionary</strong></h1>
        <form onSubmit={search}>
            <input
             type="search"
             placeholder="Search for a word"
             className="Search-input"
             onChange={handleKeywordChange}
             defaultValue={props.defaultKeyword}
             />
           </form>  
           <br />       
        <div className="resultInfo">
           <Results results={results} /> 
        </div>
 </div>   
    );
   } else {
    load();
    return "Loading";

   }
   }



