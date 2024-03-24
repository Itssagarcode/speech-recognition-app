import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

import "./App.css";

function App() {
  
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const { resetTranscript, transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="container">
      <h2>Speech to Text Convertor</h2>
      <br />
      <p>
        A react hook that converts speech from the microphone to the text and
        makes it available to your react components
      </p>

      <div className="main-content" onClick={() => setTextToCopy(transcript)}>{transcript}</div>

      <div className="btn-style">
        <button onClick={setCopied}>
          {isCopied ? "Copied 👍" : "Copy to clipboard"}
        </button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>
          Stop Listening
        </button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
}

export default App;
