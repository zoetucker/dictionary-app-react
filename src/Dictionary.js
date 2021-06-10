import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  // Dictionary api documentation > https://api.dictionaryapi.dev/api/v2/entries/en_US/hello

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleSearch);

    let pexelApikey =
      "563492ad6f917000010000014f6ea90ee0694b918e756adba3412b40";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    axios
      .get(pexelApiUrl, {
        headers: { Authorization: `Bearer ${pexelApikey}` },
      })
      .then(handlePexelResponse);
  }

  function handlePexelResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSearch(response) {
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
        <div className="hint">
          <strong>Suggested word:</strong> sun, moon, love, give, Thailand, ...{" "}
        </div>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
