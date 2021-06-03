import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState();

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function updateWord(event) {
    console.log(event);
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
