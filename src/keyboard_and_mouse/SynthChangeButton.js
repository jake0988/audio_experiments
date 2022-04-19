import React from "react";
export const SynthChangeButton = (props) => {

  return (
    <div>
      <button className="synth-change-button" onClick={(e) => props.iterate(e,props.count, "synth")} >
        Synth Type: {props.synth}
      </button>
        
        
    </div>
  );
};
