import { useState } from "react";
import "./App.css";

function App() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="container">

            <div className="counter">

                <div className="badge">
                    REACT PROJECT
                </div>

                <h1>React Counter App</h1>

                <p className="subtitle">
                    Counter using React useState Hook
                </p>

                <div className="count">
                    {count}
                </div>

                <div className="buttons">

                    <button
                        className="increment"
                        onClick={increment}
                    >
                        + Increment
                    </button>

                    <button
                        className="decrement"
                        onClick={decrement}
                    >
                        − Decrement
                    </button>

                    <button
                        className="reset"
                        onClick={reset}
                    >
                        ↻ Reset
                    </button>

                </div>

                <div className="footer">
                    Current Value: {count}
                </div>

            </div>

        </div>
    );
}

export default App;