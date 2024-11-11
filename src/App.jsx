import { useState } from "react";
import "./App.css";
import CounterContext from "./CounterContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterContext.Provider value={{ count, setCount }}>
        <div className="card">
          <button onClick={() => setCount(count + 1)}>count is {count}</button>
          {console.log("counter from", CounterContext)}
        </div>
      </CounterContext.Provider>
    </>
  );
}

export default App;
