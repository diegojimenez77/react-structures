// useRef nos ayuda a almacenar valores de formularios, no renderiza.
// example of uncontrolled component when we use useRef()
import { useRef } from "react";

function App() {
    const txtTitle = useRef();
    const hexColor = useRef();

    const submit = (e) => {
        e.preventDefault();
        const title = txtTitle.current.value;
        const color = hexColor.current.value;
        alert(`${title}, ${color}`);
        txtTitle.current.value = ""; //clears value
        hexColor.current.value = ""; // clears value
    };

    return(
        <form onSubmit={submit}>
            <input
                ref={txtTitle}
                type="text"
                placeholder="color title..."
            />
            <input ref={hexColor} type="color"/>
            <button>ADD</button>
        </form>
    )
}

export default App;