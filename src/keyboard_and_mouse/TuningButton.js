import React from "react";
export const TuningButton = (props) => {
  return (
    <div>
      <button className="tuning-toggle" onClick={(e) => props.iterate(e, props.count, "tuning")} >
        Temperament Type: {props.tuning}
      </button>
        
        
    </div>
  );
};
