import { useState } from "react";

const CounterCard = () => {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter((prev) => prev + 1);
  }
  return (
    <div>
      <h1>React Counter</h1>
      <p>Count: {counter}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default CounterCard;
