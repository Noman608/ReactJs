import { useState } from "react";
export default function useCustomCounter() {
  const [count, setCount] = useState(0);
  const handelIncrement = () => {
    setCount(count + 1);
  };
  return { count, handelIncrement };
}
