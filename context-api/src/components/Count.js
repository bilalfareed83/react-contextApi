import React, { useContext, useState } from "react";
import { myContext } from "../context/myContext";

const Count = () => {
  const { num } = useContext(myContext);

  const count = useState(4);

  return (
    <React.Fragment>
      <h1>This is age {num[0]}</h1>
      <button onClick={() => num[1](++num[0])}>add</button>
      <h1>This is count {count}</h1>
      <button onClick={() => count[1](++count[0])}>add</button>
    </React.Fragment>
  );
};

export default Count;
