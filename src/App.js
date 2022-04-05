import "./App.css";
import React from "react";
import { KeyboardIcon } from "./KeyboardIcon";
import "./style.css";
import { handleKeyDown } from "./keyboardClick";
import { handleKeyUp } from "./keyboardClick";
import Knob from "./Knob";

function App() {

  return (
    <div className="App" >
      <div className="bg-image" style={{ maxWidth: "22rem" }}>
        <Knob/>
        <KeyboardIcon />
      </div>
     
    </div>
  );
}

export default App;
