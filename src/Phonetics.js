import React from "react";

export default function Phonetic(props) {
  console.log(props.phonetic);
  if (props.phonetic) {
    // Finding objects in the array that contain an audio file and is strictly not a string, it's then saved into the audioData variable
    let audioData = props.phonetic.phonetics.find(
      (audioFile) => audioFile.audio !== ""
    );

    let audioUrl = null;
    if (audioData) {
      // audioData in .find() search
      audioUrl = audioData.audio;
    } else {
      audioUrl = null;
    }

    let phoneticText = props.phonetic.text || props.phonetic.phonetic;

    return (
      <div className="Phonetic">
        <span className="text">{phoneticText}</span>
        <br />

        {/* Renders the link only if a alid audioUrl exists */}
        {audioUrl && (
          <a
            href={audioUrl}
            target="_blank"
            rel="noreferrer"
            className="audio-link"
          >
            Listen
          </a>
        )}
      </div>
    );
  } else {
    return null;
  }
}
