import { useState } from "react";

function App() {
    const [checked, setChecked] = useState(false);
    return(
        <div className="App">
            <input type="checkbox"
             value={checked} 
             onChange={() => 
                setChecked((checked => !checked))
            } />
            <label>
                {checked ? "checked":"not checked"}
            </label>
        </div>
    );
}

export default App;

////////////////////////////////////////////////////////

import { useReducer } from "react";

function App() {
    const [checked, setChecked] = useReducer(
        (checked) => !checked,
        false
    );
    return(
        <div className="App">
            <input type="checkbox"
             value={checked} 
             onChange={setChecked}
            />
            <label>
                {checked ? "checked":"not checked"}
            </label>
        </div>
    );
}

export default App;