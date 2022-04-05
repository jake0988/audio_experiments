import React from "react";
import * as Tone from "tone";

let fmSynth = new Tone.PolySynth(Tone.FMSynth).toDestination();
const now = Tone.now();
let amSynth = new Tone.PolySynth(Tone.AMSynth).toDestination()

let synth = new Tone.PolySynth(Tone.Synth).toDestination()
let toneSynth = new Tone.PolySynth(Tone.Synth).toDestination()

export function synthChange(synthType) {
  switch(synthType) {
    case("sine") :
      return synth = toneSynth;
    case("fm") :
      return synth = fmSynth;
    case("am") :
      return synth = amSynth;
    default :
      return synth - toneSynth;
  }
}

export function polyNote(e, pitch) {
  e.preventDefault();
  e.stopPropagation();

  synth.triggerAttack(pitch);
  
}

// export function polyNoteNoE(pitch, synthType, up) {
//   synth.triggerAttack(pitch, now);
//   if (up) {
//     synth.triggerRelease([pitch], now);
//   }
// }

export function polyNoteUp(pitch) {
  synth.triggerRelease([pitch], "+.0000001");
}
