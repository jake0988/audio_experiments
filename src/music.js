const synth = new Tone.Synth().toMaster();
synth.triggerAttackRelease("C4", "8n");

document.getElementById("play-button").addEventListener("click", function () {
  if (Tone.Transport.state !== "started") {
    Tone.start();
  } else {
    Tone.Transport.stop();
  }
});
