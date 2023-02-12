import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useGetValue, useSetValue } from "../hooks/queryHooks";

const Counter = () => {
  const [initValue, setInitValue] = useState(0);
  const setValue = useSetValue(["num"]);
  const num = parseInt(useGetValue(["num"], ""), 10);

  const setNumHandler = () => {
    if (isNaN(initValue)) return;
    setValue(initValue);
  };

  const plusNumHandler = () => {
    setValue(num + 1);
  };

  const minusNumhandler = () => {
    setValue(num - 1);
  };

  return (
    <>
      <button onClick={plusNumHandler}>+1</button>
      <button onClick={minusNumhandler}>-1</button>
      <input
        value={initValue}
        onChange={({ target: { value } }) => setInitValue(value)}
      ></input>
      <button onClick={setNumHandler}>init</button>
    </>
  );
};

export default Counter;
