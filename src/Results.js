import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  // console.log(props.results);
  if (props.results) {
    return (
      <>
        {/* fragment to group elements without wrapper since conditional rendering can only return one */}
        <div className="Results">
          <h2>{props.results.word}</h2>
          <Phonetics phonetic={props.phonetics} />
        </div>
        {/*} {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })} */}
        <section>
          <Meaning meaning={props.results.meanings[0]} />
        </section>
      </>
    );
  } else {
    return null;
  }
}
