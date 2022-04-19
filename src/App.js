import "./App.css";
import React from "react";
import "./style.css";
import CursorContextProvider from "./mouseGraphics/CursorContextProvider";
import Cursor from "./mouseGraphics/Cursor";
import { CursorButton } from "./mouseGraphics/CursorButton";
import DraggableRotate from "./knobSVG/DraggableRotate";
import Main from "./keyboard_and_mouse/Main";
function App(props) {
  return (
    <div className="App">
      <CursorContextProvider>
        <Main />

        <Cursor />
        <CursorButton />
        {props.children}
      </CursorContextProvider>
    </div>
  );
}

export default App;
