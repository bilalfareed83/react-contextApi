import React from "react";
import "./App.css";
import Test from "./components/Test";
import Count from "./components/Count";
import { MyContextProvider } from "./context/myContext";

function App() {
  return (
    <div className="App">
      <MyContextProvider>
        <Test />
        <Count />
      </MyContextProvider>
    </div>
  );
}

export default App;
