import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  //here counter is a variable.
  //setCounter is a function.
  //so here , counter variable is depend on setCounter function.
  //now change the value of counter using setCounter.
  //useState returns as a array in 2 value.
  let [counter, setCounter] = useState(0);

  // let counter = 5;

  const addvalue = () => {
    if(counter < 20){
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>I Am Darshan</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Increase value</button>
      &nbsp;
      <button onClick={removeValue}>Decrese value</button>
      <p>Again Counter : {counter}</p>
    </>
  );
}

export default App;
