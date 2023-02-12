import { useGetValue } from "../hooks/queryHooks";

const View = () => {
  const num = useGetValue(["num"], "");
  return <h1>{num}</h1>;
};

export default View;
