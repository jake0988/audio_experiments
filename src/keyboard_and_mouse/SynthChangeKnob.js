import React from "react";
import {ReactComponent as Sine} from '../knobSVG/SVG/SVG/Asset 8sine.svg';
import {ReactComponent as Fm} from '../knobSVG/SVG/SVG/Asset 9fm.svg';
import {ReactComponent as Am} from '../knobSVG/SVG/SVG/Asset 10am.svg';
function SynthChangeKnob(props) {
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
    <div className="synth-toggle" onClick={(e) => props.iterate(e, props.count, "synth")} >{renderSVG(props.synth)}</div>
  )
}
export default SynthChangeKnob