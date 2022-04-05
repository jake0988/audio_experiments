import React from "react";
import "./knobSVG/SVG/SVG/knobStyle.css"
import Line from "./knobSVG/SVG/SVG/Line";
import { useSpring, animated } from 'react-spring'
import { useState } from "react";
import {ReactComponent as Sine} from './knobSVG/SVG/SVG/Asset 8sine.svg';
import {ReactComponent as Fm} from './knobSVG/SVG/SVG/Asset 9fm.svg';
import {ReactComponent as Am} from './knobSVG/SVG/SVG/Asset 10am.svg';
function Knob(props) {
  // const svgArr = [<Sine/>, <Fm/>, <Am/>]
 function renderSVG(props){
  switch (props) {
    case ("sine") :
      return <Sine/>
    case("fm") :
      return <Fm/>
    case("am") :
      return <Am/>
    default:
      return ""
  }
}
  return (
    <div ><image className="synth-toggle" onClick={() => props.iterate(props.count)} >{renderSVG(props.synth)}</image></div>
  )
}
export default Knob