import React from "react";
import { handleKeyDown } from "./keyboardClick";
import { handleKeyUp } from "./keyboardClick";
import { useEffect } from "react";
import { PlayButton } from "./PlayButton";
import { useState } from "react";
import { synthArray } from "./synth-context";
import { useRef } from "react";
import KeyboardSVG from "./KeyboardSVG";
import Knob from "./Knob";
import { synthChange } from "./PolyNote";
import AM from "./AM";
import tuning from "./tuning";
import { Scale } from "tone";

function Keyboard() {
  const [synth, toggleSynth] = useState("sine")
  const [count, setCount] = useState(0);
  const newSynth = useRef(synthArray[count]);
  const ref = useRef();
  useEffect(() => {
    ref.current = synthChange(temp)
    document.addEventListener("keydown", toggleHandleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    return function cleanup() {
      document.removeEventListener("keydown", toggleHandleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [count, synth]);

  
  const temp = synthArray[count] 
  function toggleHandleKeyDown(e) {
    if (e.repeat) {
      return
    }
    handleKeyDown(e)
  }

  function cycle(n) {
    return (n + 1) % 3;
      
  }

  function iterate(count) {
    setCount(cycle(count));
    toggleSynth(temp)
    newSynth.current = synth
    synthChange(ref.current)
  }

  function am() {
    if (synth === "am") {
      return <AM />
    }
  }

  function scale() {

  }

  return (
    <div >
      <PlayButton synth={temp} iterate={iterate} count={count}/>
      <Knob synth={temp} iterate={iterate} count={count}/>
      <KeyboardSVG />
      <div className = "synth-controls">{am}</div>
    </div>
  );
}

export default Keyboard;
