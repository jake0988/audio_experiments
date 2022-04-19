import React from "react";
import { Button, Col } from "react-bootstrap";
import { useState } from "react";

function Octave({octave, setOctave}) {
  
  function lowerOctave(e){
    e.preventDefault()
    setOctave(octave - 1)
  }
  function raiseOctave(e){
    e.preventDefault()
    setOctave(octave + 1)
  }
  return(
    <div className="octave">
      <h3>Octave</h3>
      <Button onClick={(e)=>raiseOctave(e)}>Up</Button>
      <Col>{octave}</Col>
    <Button onClick={(e)=>lowerOctave(e)}>Down</Button>
    
    
    </div>
  )
}

export default Octave