import React from "react";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h3>Here are results!</h3>
      </div>
    );
  } else {
    return null;
  }
}
