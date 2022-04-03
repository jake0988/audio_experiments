import * as Tone from "tone";
import { useState } from "react";
import { useEffect } from "react";
import { synthArray } from "./synth-context";
import { synths } from "./synth-context";

export const PlayButton = (props) => {
  


  return (
    <div>
      <button className="synth-toggle" onClick={() => props.iterate(props.count)} >
        Synth Type: {props.synth}
      </button>
        
        
    </div>
  );
};
