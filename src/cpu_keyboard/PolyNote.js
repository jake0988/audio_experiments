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
  const toneSynth = new Tone.PolySynth(Tone.Synth).toDestination()
  debugger
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



export function polyNote(e, pitch) {
  if (!synth) {
    defaultSynth()
  }
  if (e.type) {
  Tone.start()
  e.preventDefault();
  e.stopPropagation();
  const filter = new Tone.Filter(1200, "highpass").toDestination();

  const env = new Tone.AmplitudeEnvelope({
		attack: .5,
		decay: 10,
		sustain: 0.5,
		release: 1,
	}).toDestination()
  const vol = new Tone.Volume(-60);
  
  const limiter = new Tone.Limiter(-20).toDestination();
  synth.connect(vol).triggerAttack(pitch);
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
  const vol = new Tone.Volume(-60);
  synth = new Tone.PolySynth(Tone.Synth).connect(vol).toDestination()
  Tone.context.resume();
}