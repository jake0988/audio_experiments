import "./App.css";
import React from "react";
import { PlayButton } from "./PlayButton";
import { KeyboardIcon } from "./KeyboardIcon";
import "./style.css";
import { Example } from "./Example";
import { ReactComponent as Logo } from "./Keyboard.svg";

function App(props) {
  return (
    <div className="App">
      <PlayButton />
      <div className="bg-image" style={{ maxWidth: "22rem" }}>
        <KeyboardIcon />
      </div>
      <div>
        <div className="dodo">adsfdsagd</div>
        <div className="view">
          <img src="https://mdbootstrap.com/img/new/standard/city/053.webp" />
        </div>
        adsgsdgadsdasg
        <div className="mask pattern-1"></div>
        rgba(57, 192, 237, 0.6)
        <div className="bg-image" style={{ maxWidth: "28rem" }}>
          <div
            className="mask"
            style={{
              background:
                "linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)",
            }}
          >
            <img
              src="https://mdbootstrap.com/img/new/standard/city/053.webp"
              className="w-100"
            />
          </div>
        </div>
        <div>
          <Logo />
        </div>
      </div>

      {/* <img src={require("./CoolClips_arts0153.png.svg")} alt="img" /> */}
    </div>
  );
}

export default App;
