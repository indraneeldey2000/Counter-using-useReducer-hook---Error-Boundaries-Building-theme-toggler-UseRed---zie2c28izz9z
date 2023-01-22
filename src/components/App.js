import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count => count + 1);
  };
  const decrease = () => {
    if (count != 0) {
      setCount(count => count - 1);
    }
  };
  const reset = () => {
    setCount(0)
  }
  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={increase} id="addTaskBtn">Add a task</button>
      <button onClick={decrease} id="delTaskBtn">Delete a task</button>
      <button onClick={reset} id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {count}</h3>
    </div>
  )
}


export default App;
