import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(50);
  const handeleIncrement = () => {
    setCount(count + 1);
  };
  const handeleDcrement = () => {
    setCount1(count1 - 1);
  };
  useEffect(() => {
    console.log("<-----Use Effect Called----->");
  }, [count1]);
  return (
    <React.Fragment>
      <h1>Count up:{count}</h1>
      <button type="button" onClick={handeleIncrement}>
        Increment
      </button>
      <h1>Count Down:{count1}</h1>
      <button type="button" onClick={handeleDcrement}>
        Increment
      </button>
    </React.Fragment>
  );
}
