import * as Tone from "tone";


let synth ;

export function synthChange(e, synthType) {
  if (!synth) {
    defaultSynth()
  }
  if (e.type){
    
  Tone.context.resume();
  
  
  const fmSynth = new Tone.PolySynth(Tone.FMSynth).toDestination();
  const amSynth = new Tone.PolySynth(Tone.AMSynth).toDestination()
  // const synth = new Tone.PolySynth(Tone.Synth).toDestination()
  const toneSynth = new Tone.PolySynth(Tone.Synth).toDestination()
  switch(synthType) {
    case("sine") :
      return synth = toneSynth;
    case("fm") :
      return synth = fmSynth;
    case("am") :
      return synth = amSynth;
    default :
      return synth = "toneSynth";
  }}
}

function synthOutput() {
  if (synth) {
    return Tone.Offline(() => {
      const ampEnv = new Tone.AmplitudeEnvelope({
        attack: 10,
        decay: 0.2,
        sustain: 5.0,
        release: 5
      }).toDestination();
      // create an oscillator and connect it
      synth.connect(ampEnv).start()
    }, 1.5, 1);
  
}}

synthOutput()
export function polyNote(e, pitch) {
  if (!synth) {
    defaultSynth()
  }
  if (e.type) {
  Tone.start()

Tone.context.resume();
  e.preventDefault();
  e.stopPropagation();
  synth.triggerAttack(pitch);
  }
}

export function polyNoteUp(e, pitch) {
  if (!synth) {
    defaultSynth()
  }
  if (e.type){
  synth.triggerRelease([pitch], "+.0000001");
}}

function defaultSynth() {
  synth = new Tone.PolySynth(Tone.Synth).toDestination()
  Tone.context.resume();
}