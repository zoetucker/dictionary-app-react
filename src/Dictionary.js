import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();
  let [results, setResults] = useState(null);

  // Dictionary api documentation > https://api.dictionaryapi.dev/api/v2/entries/en_US/hello

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleSearch);
  }

  function handleSearch(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function updateWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a word"
                onChange={updateWord}
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-secondary"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>
        <div className="hint">sunset, love, code, technology, give, ...</div>
      </section>

      <Results results={results} />
    </div>
  );
}
