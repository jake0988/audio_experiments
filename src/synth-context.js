import React from "react";
import * as Tone from "tone"

export const synths = {
    sine: new Tone.PolySynth(Tone.Synth).toDestination(),
    am: new Tone.PolySynth(Tone.FMSynth).toDestination(),
    fm: new Tone.PolySynth(Tone.FMSynth).toDestination(),
  
}


export  const synthArray = ["sine", "fm", "am"];

// export const SynthsContext = React.createContext(synths.synthTypes.synth);
// export const SynthArrayContext = React.createContext(synthArray.synth);