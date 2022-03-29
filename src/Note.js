import React from "react";
import * as Tone from "tone";

const synth = new Tone.Synth().toDestination();

// export function newNote(pitch, up) {
//   const synth = new Tone.Synth().toDestination();
//   const now = Tone.now();
//   // trigger the attack immediately
//   // synth.triggerAttack(synth, pitch);
//   // key(synth, pitch);
//   synth.triggerAttack(pitch, now);
//   if (up) {
//     // debugger;
//     synth.triggerRelease(now + 1);
//   }
//   // wait one second before triggering the release
//   // synth.triggerRelease(pitch);
// }

export function note(pitch, up) {
  const now = Tone.now();
  // trigger the attack immediately
  // synth.triggerAttack(synth, pitch);
  // key(synth, pitch);
  synth.triggerAttack(pitch, now);
  if (up) {
    // debugger;
    synth.triggerRelease(now);
  }
  // wait one second before triggering the release
  // synth.triggerRelease(pitch);
}
