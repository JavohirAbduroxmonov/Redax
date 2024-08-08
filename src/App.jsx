import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux"; 
import { increment, decrement } from "./counterSlice";

export default function App() {
  // Correct function keyword
  const count = useSelector((store) => store.counter.count); 
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
      </div>
      <div className="buttons">
        <div>
          {" "}
          <button className="button+" onClick={() => dispatch(increment())}>
            +
          </button>
        </div>
        <div></div> <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}
 