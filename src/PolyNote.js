import React from "react";
import * as Tone from "tone";

let fmSynth = new Tone.PolySynth(Tone.FMSynth).toDestination();
const now = Tone.now();
let amSynth = new Tone.PolySynth(Tone.AMSynth).toDestination()

let synth = new Tone.PolySynth(Tone.Synth).toDestination()
let toneSynth = new Tone.PolySynth(Tone.Synth).toDestination()

export function polyNote(e, pitch, synthType, up) {
  // debugger
  if (e) {
  e.preventDefault();
  }
  if (synthType === "fm"){
  synth = fmSynth
  // debugger
  }
  else if (synthType === "am") {
    synth = amSynth
  }
  else if (synthType === "synth") {
    synth = toneSynth
  }
  
  // trigger the attack immediately
  // synth.triggerAttack(synth, pitch);
  // key(synth, pitch);
  synth.triggerAttack(pitch, now);
  if (up) {
    // debugger
    synth.triggerRelease([pitch], now);
  }
}

export function polyNoteNoE(pitch, synthType, up) {
  // trigger the attack immediately
  // synth.triggerAttack(synth, pitch);
  // key(synth, pitch);
  synth.triggerAttack(pitch, now);
  if (up) {
    synth.triggerRelease([pitch], now);
  }
}

export function polyNoteUp(pitch, synthType) {
  synth.triggerRelease([pitch], now);
}
