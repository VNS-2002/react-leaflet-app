import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  let [counter1, setCounter1] = useState(0);
  // eslint-disable-next-line no-unused-vars
  let [counter2, setCounter2] = useState(0);
  let [counterState, setCounterState] = useState(0);

  const incrementCounter = () => {
    setCounterState((prevCounter) => prevCounter + 1);
  };

  useEffect(() => {
    alert("use effect call performing side effect");
    document.title = "React Leaflet";
  }, []);

  return (
    <>
      <h1>React App</h1>
      <h3>State and Props</h3>
      Counter is {counterState}
      <br />
      <div className="flex">
        <button
          className="rounded-md mb-3 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          data-ripple-dark="true"
          onClick={incrementCounter}
        >
          Increment Counter
        </button>
      </div>
      
      <h3>Props</h3>
      <button
        onClick={() => setCounter1((prev) => prev + 1)}
        className="btn-default overflow-hidden relative w-36 bg-stone-50 text-gray-900 py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-gradient-to-t hover:from-stone-100 before:to-stone-50 hover:-translate-y-[3px]"
      >
        <span className="relative">Increment1</span>
      </button>
      <button
        onClick={() => setCounter2((prev) => prev + 1)}
        className="btn-default overflow-hidden relative w-36 bg-stone-50 text-gray-900 py-4 px-4 rounded-xl font-bold uppercase transition-all duration-100 -- hover:shadow-md border border-stone-100 hover:bg-gradient-to-t hover:from-stone-100 before:to-stone-50 hover:-translate-y-[3px] ml-10"
      >
        <span className="relative">Increment2</span>
      </button>
      <br />
      {/* <h3>List and map()</h3> */}
      <br />
    </>
  );
}

export default App;
