import {
  useState,
  useRef
} from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function deinitRef(ref) {
    ref.current.value = null;
  }

  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value));
    deinitRef(inputRef);
  }; 

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    deinitRef(inputRef);
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    deinitRef(inputRef);
  };

  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
    deinitRef(inputRef);
  };

  function resetInput(e) { 
    e.preventDefault();
    deinitRef(inputRef);
  };

  function resetResult(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

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
          ref={inputRef} 
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
