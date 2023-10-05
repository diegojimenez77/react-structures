// use https://codesandbox.io/s/gifted-brown-7y4kd6?file=/src/App.js
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion, secondary]); //[] is the dependency array, if it is empty, it will
  // listen to the state just once.
  // but if it is filled with [emotion], it will listens
  // the state every time the states changes.

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary, emotion]);
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>sad</button>
      <button onClick={() => setEmotion("excited")}>Excited</button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick={() => setSecondary("grateful")}>Grateful</button>
      <button onClick={() => setSecondary("bored")}>Bored</button>
    </div>
  );
}

export default App;
