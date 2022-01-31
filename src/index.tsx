import React from "react";
import ReactDOM from "react-dom";
import { SelectAccount } from "./components/SelectAccount";

function App() {
  // onload:
  // send msg to plugin, recover figma object
  // pass object as props to SelectAccount
  return (
    <div>
      <SelectAccount />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("figma-react-template"));
