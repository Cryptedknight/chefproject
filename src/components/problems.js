import React from "react";
import Timer from "./timer";
//import styles from "./rules.module.css";

const probarray = [
  {
    id: 1,
    text: "Chef and Blah"
  },
  {
    id: 2,
    text: "Chef and Bleh"
  
  },
  {
    id: 3,
    text: "Chef and Bloo"
  }
];

const bar = (
  <ul>
    {probarray.map(prob => (
      <li key={prob.id}>{prob.text}</li>
    ))}
  </ul>
);

function problem() {
  return (
    <div>
      <h1>Problems</h1>
        <div>
          {bar}
          </div>
          <div>
            Time Left
          <div>
              <Timer/>
          </div>
          </div>
    </div>
  );
}

export default problem;
