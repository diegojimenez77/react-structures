import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [emotion, setEmotion] = useState("happy");

    useEffect(() =>{
        console.log(`It's ${emotion} right now`);
    }, [emotion]); //[] is the dependency array, if it is empty, it will
    // listen to the state just once.
    // but if it is filled with [emotion], it will listens
    // the state every time the states changes.
    return (
        <div className="App">
            <h1>Current emotion is {emotion}</h1>
            <button onClick={() => setEmotion("sad")}>
                sad
            </button>
            <button onClick={() => setEmotion("excited")}>
                Excited
            </button>
        </div>
    );
}

export default App;