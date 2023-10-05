import "./App.css";

function App(props) {
    return(
        <div className="App">
            <h1>Hello from {props.library}</h1>
        </div>
    );
}

export default App;
///////////////////////////////////////////////////////////////
import "./App.css";

function App(library) {
    return(
        <div className="App">
            <h1>Hello from {library}</h1>
        </div>
    );
}

export default App;
//////////////////////////////////////////////////////////////
// Destructuring Arrays
import "./App.css";

const cities = ["Tokyo", "Tahoe City", "Bend"];

console.log(cities[0]);

function App(library) {
    return(
        <div className="App">
            <h1>Hello from {library}</h1>
        </div>
    );
}

export default App;
/////////////////////////////
import "./App.css";

const [firstCity, SecondCity, ThirdCity] = [
    "Tokyo", 
    "Tahoe City", 
    "Bend"
];

console.log(firstCity); // Tokyo
console.log(SecondCity); // Tahoe City
console.log(ThirdCity); // Bend

function App(library) {
    return(
        <div className="App">
            <h1>Hello from {library}</h1>
        </div>
    );
}

export default App;