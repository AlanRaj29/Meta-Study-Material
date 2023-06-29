import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) { 
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value)); 
  };
 
  function times(e) { 
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));  
  }; 
 
  function divide(e) { 
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));  /* convert the value of the input field from a string to a numeric value. */
  };
 
  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = ""; // Clear the input field
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0); // Reset the result to 0
  }
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}> 
          {result}
        </p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} /* can use the provided input from the user in the code */
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>reset input</button>
        <button onClick={resetResult}>reset result</button>

      </form> 
    </div> 
  ); 
} 
 
export default App; 
