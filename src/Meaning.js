import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>definition: {props.meaning.definition}</p>
      <p>sentence example: {props.meaning.example}</p>
      <br />
      <Synonyms synonyms={props.meaning.synonyms} />
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
