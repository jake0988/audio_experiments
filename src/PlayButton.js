import React from "react";
export const PlayButton = (props) => {


  return (
    <div>
      <button className="synth-toggle" onClick={() => props.iterate(props.count)} >
        Synth Type: {props.synth}
      </button>
        
        
    </div>
  );
};
