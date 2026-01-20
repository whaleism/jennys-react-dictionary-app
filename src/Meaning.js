import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
      </section>
      <section className="meaning-style">
        <p>
          <strong>definition:</strong> {props.meaning.definition}
        </p>
        <p className="sentence-example-style">"{props.meaning.example}"</p>
        <br />
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
  /* {props.results.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            </div>
          );
        })} */
}
