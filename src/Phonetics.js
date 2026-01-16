import React from "react";

export default function Phonetic(props) {
  // console.log(props.phonetic);
  if (props.phonetic) {
    // conditional rendering
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

    function playAudio(event) {
      event.preventDefault();
      let audio = new Audio(audioUrl);
      audio.play();
    }

    return (
      <div className="Phonetics">
        <span className="text">
          {props.phonetic.text || props.phonetic.phonetic}
        </span>
        {audioUrl && (
          <button onClick={playAudio} className="audio-button">
            <i className="fa-solid fa-volume-high"></i>
          </button>
        )}
      </div>
    );
  } else {
    return null;
  }
}
