import React from "react";
import { animated } from "react-spring";

function Line(props) {

  return(
  <animated.div style={props}><line className="f" x1="72.07" y1="59.36" x2="72.07" y2="15.86" />I will fade in</animated.div>)
}

export default Line