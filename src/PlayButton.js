import React from "react";
export const PlayButton = (props) => {
console.log("In PlayButton", props.synth, props.count)

  return (
    <div>
      <button className="synth-toggle" onClick={() => props.iterate(props.count)} >
        Synth Type: {props.synth}
      </button>
        
        
    </div>
  );
};
