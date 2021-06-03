import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();

  // Dictionary api documentation > https://api.dictionaryapi.dev/api/v2/entries/en_US/hello

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleSearch);
  }

  function handleSearch(response) {
    console.log(response.data[0]);
  }

  function updateWord(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit="">
        <input
          className="form-control"
          type="search"
          placeholder="Enter a word"
          autoFocus={true}
          onChange={updateWord}
        />
        <input
          className="btn btn-secondary"
          type="submit"
          value="Search"
          onClick={search}
        />
      </form>
    </div>
  );
}
