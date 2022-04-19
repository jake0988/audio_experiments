import React from "react";
import KeyboardSVG from "../KeyboardSVG";
import { Row, Col } from "react-bootstrap";
import SynthChangeKnob from "../../keyboard_and_mouse/SynthChangeKnob";
import { TuningButton } from "../../keyboard_and_mouse/TuningButton";
import { useState, useRef, useEffect } from "react";
import { synthChange } from "../PolyNoteMouse";
import { tuningArray } from "../../keyboard_and_mouse/synth-context";
import { scaleChooser } from "../../keyboard_and_mouse/scaleObject";
import { synthArray } from "../../keyboard_and_mouse/synth-context";
import { SynthChangeButton } from "../../keyboard_and_mouse/SynthChangeButton";
import { noteToNumberConvertor } from "../../keyboard_and_mouse/scaleObject";
import { singleNote } from "../../keyboard_and_mouse/scaleObject";
import { upOrDown } from "../../keyboard_and_mouse/scaleObject";
import Octave from "./Octave";

function KeyboardSynth() {
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
  const octaveTranspose = useRef()
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
  }, [count, synth, tempTuning]);

  const [octave, setOctave] = useState(0)
  function cycle(n, m) {
    return (n + 1) % m;
  }

  function iterate(e, count, type) {
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

    function createTemperedNote(e, noteId) {
        const noteNumber = noteToNumberConvertor(noteId);
        const note = singleNote(tuningCh.current, noteNumber);
        upOrDown(e, noteId);
    }
  }
  return (
    <div>
      <Row>
        <Col xs="3">
          <SynthChangeButton
            synth={tempSynth}
            iterate={iterate}
            count={count}
          />
          <SynthChangeKnob synth={tempSynth} iterate={iterate} count={count} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TuningButton
            tuning={tempTuning}
            iterate={iterate}
            count={tuningCount}
          />
        </Col>
        <Col><Octave octave={octave} setOctave={setOctave}/></Col>
      </Row>
      <Row>
        <KeyboardSVG tuningCh={tuningCh.current} octave={octave}/>
      </Row>
    </div>
  );}

export default KeyboardSynth;