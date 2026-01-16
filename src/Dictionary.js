import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [phonetics, setPhonetics] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    function handleResponse(response) {
      // Handles SheCodes Api Data
      /* console.log(response.data.meanings[0]); */
      setResults(response.data);
    }

    function handlePhoneticsResponse(response) {
      // This handles ONLY the DictionaryApi phonetics data
      setPhonetics(response.data[0]);
    }

    // API 1: SheCodes (Definitions)
    let apiKey = "3f3b4696cb6569teb708ec8264d1ad5o";
    let sheCodesApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(sheCodesApiUrl).then(handleResponse);

    // API 2: DictionaryApi (Phonetics)
    let phoneticsApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(phoneticsApiUrl).then(handlePhoneticsResponse);
  }

  function handleKeywordChange(event) {
    /* console.log(event.target.value); */
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <main>
        <h1>Dictionary App</h1>
        <span className="">Search for a word</span>
      </main>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}></input>
        <input type="submit" value="Search"></input>
      </form>
      <Results results={results} phonetics={phonetics} />
    </div>
  );
}
