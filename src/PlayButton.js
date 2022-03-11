import * as Tone from "tone";

export const PlayButton = () => {
  let synth;

  function playIt() {
    synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
    if (Tone.Transport.state !== "started") {
      Tone.start();
    } else {
      Tone.Transport.stop();
    }
  }
  return (
    <div>
      <button className="play-button" onClick={() => playIt()}>
        Play/Pause
      </button>
    </div>
  );
};
