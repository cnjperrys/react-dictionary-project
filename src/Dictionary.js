import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
      setResults(response.data);
    }

   function search(event){
    event.preventDefault();
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=c922be1463d4549f3f9otcacf2b890af`;
    axios.get(apiUrl).then(handleResponse);
   }

   
   function handleKeywordChange(event){
    setKeyword(event.target.value);
   }
   
    return (
    <div className="Dictionary">
        <h1><strong>Dictionary</strong></h1>
        <form onSubmit={search}>
            <input
             type="search"
             placeholder="Search for a word"
             className="Search-input"
             onChange={handleKeywordChange}
              />
        </form>         
        <div className="resultInfo">
           <Results results={results}/> 
        </div>
 </div>
    );
}


