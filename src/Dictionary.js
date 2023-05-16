import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [newWord, setNewWord] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response) {
      setResults(response.data);
    }
    function handlePexelsResponse(response){
      setPhotos(response.data.photos);
    }

   function search(keyword) {
    let key="c922be1463d4549f3f9otcacf2b890af";
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${newWord}&key=${key}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "c922be1463d4549f3f9otcacf2b890af"
    let pexelsApiUrl = `https://api.shecodes.io/images/v1/search?query=${newWord}&key=${pexelsApiKey}& per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
   }

   function handleSubmit(event) {
      event.preventDefault();
      search();
   }
   
   function handleNewWordChange(event){
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
             onChange={handleNewWordChange}
             defaultValue={props.defaultKeyword}/>
           </form> 
           <div className="hint">
            suggested words: tech, women, developer, SheCodes.io....
            </div>   
        </section>
           <Results results={results} /> 
           <Photos photos={photos} />
          
        </div>
    );
   } else {
    load();
    return "Loading";

   }
   }



