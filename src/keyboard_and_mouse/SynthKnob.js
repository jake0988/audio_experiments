import React from "react";
import { useState } from "react";
import emptyKnob from '../knobSVG/SVG/SVG/Asset 3empty.svg'
import { useSpring, animated } from "react-spring";
function SynthKnob(props) {
  return<div>
      <img src={emptyKnob} alt="emptyKnob"/>
</div>
}

export default SynthKnob