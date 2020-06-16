import React, { useContext } from "react";
import { myContext } from "../context/myContext";

const Test = () => {
  const {
    initState: { name },
  } = useContext(myContext);
  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
    </React.Fragment>
  );
};

export default Test;
