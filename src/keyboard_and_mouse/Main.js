import React from "react";
import { useEffect } from "react";
import { SynthChangeButton } from "./SynthChangeButton";
import { useState } from "react";
import { synthArray } from "./synth-context";
import { useRef } from "react";
import KeyboardSVG from "../mouse/KeyboardSVG";
import SynthChangeKnob from "./SynthChangeKnob";
import { synthChange } from "../cpu_keyboard/PolyNote";
import { TuningButton } from "./TuningButton";
import { tuningArray } from "./synth-context";
import { upOrDown } from "./scaleObject";
import { letterToNumberConvertor } from "./scaleObject";
import { singleNote } from "./scaleObject";
import { scaleChooser } from "./scaleObject";
import * as Tone from "tone";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import DraggableRotate from "../knobSVG/DraggableRotate";
import KeyboardSynth from "../mouse/presentation/KeyboardSynth.js";

function Main() {
  // changes synth type
  const [synth, toggleSynth] = useState("sine");
  // sets the count for the synth array
  const [count, setCount] = useState(0);
  // sets the type of temperament
  const [tuning, toggleTuning] = useState("Equal");
  // set the count for the temperament array
  const [tuningCount, setTuningCount] = useState(0);
  // creates a reference for the synth type
  const synthCh = useRef();
  // creates a reference for the tuning type
  const tuningCh = useRef();
  // creates a reference for the event
  const event = useRef(null);
  // creates a variable for the first note
  let origFreq = 155.56;
  // creates a temporary variable for the the synth type
  const tempSynth = synthArray[count];
  // creates a temporary variable for the temperament type
  const tempTuning = tuningArray[tuningCount];

  useEffect(() => {
    //changes the synth type reference
    if (event.current !== null) {
      synthCh.current = synthChange(event.current, tempSynth);
    }
    // changes the temperament type reference
    tuningCh.current = scaleChooser(tempTuning, origFreq);
    // changes the synth type and passes the current event
    toggleSynth(event.current, tempSynth);
    // changes the tuning type and passes the current temperament
    toggleTuning(event.current, tempTuning);
    // adds keydown and keyup listeners
    document.addEventListener("keydown", createTemperedNote);
    document.addEventListener("keyup", createTemperedNote);
    return function cleanup() {
      document.removeEventListener("keydown", createTemperedNote);
      //   document.removeEventListener("keyup", createTemperedNote);
      //   scaleChooser(tempTuning, origFreq)
      //   toggleSynth(tempSynth)
      // toggleTuning(tempTuning)
    };
  }, [count, synth, tempTuning]);

  function createTemperedNote(e) {
    if (e.repeat) {
      return;
    }
    if (e.key !== "Enter") {
      const noteNumber = letterToNumberConvertor(e);
      const note = singleNote(tuningCh.current, noteNumber);
      upOrDown(e, note);
    }
  }

  function cycle(n, m) {
    return (n + 1) % m;
  }

  function iterate(e, count, type) {
    console.log("In iterate", count);
    switch (type) {
      case "tuning":
        event.current = e;
        return setTuningCount(cycle(count, 2));
      case "synth":
        event.current = e;
        return setCount(cycle(count, 3));
      default:
        return;
    }
  }

  return (
    <div>
      <Container fluid>
     
          <KeyboardSynth synth={tempSynth}
              iterate={iterate}
              count={count}
              tuning={tempTuning}
              tuningCount={tuningCount}/>
       
        <Row>
          <Col>
            <SynthChangeButton
              synth={tempSynth}
              iterate={iterate}
              count={count}
            />
            <SynthChangeKnob
              synth={tempSynth}
              iterate={iterate}
              count={count}
            />
          </Col>
          <Col xs={8}>
            <TuningButton
              tuning={tempTuning}
              iterate={iterate}
              count={tuningCount}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <DraggableRotate />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
