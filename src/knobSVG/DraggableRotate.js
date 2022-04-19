import React, { useEffect, useState, useRef } from "react";
import SynthKnob from "../keyboard_and_mouse/SynthKnob";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "../style.css";


function DraggableRotate() {
  const dragInstance = useRef(null);
  const dragTarget = useRef(null);
  const [rotation, setRotation] = useState(0)
  const displayRotation = useRef(null)
  // var curRotation = gsap.getProperty(dragInstance.current, "rotation");
  gsap.registerPlugin(Draggable)
  useEffect(() => {
    dragInstance.current = Draggable.create(dragTarget.current, {
      type: "rotation",
      dragResistance: .1,
      bounds: {minRotation: 0, maxRotation: -359},
      onDrag(e) {
        
        var curRotation = gsap.getProperty(this, "rotation");
        displayRotation.current = parseInt(curRotation)
        setRotation(curRotation)
      // debugger
      },
      onDragEnd() {
        setRotation(this.rotation)
        console.log(this);
      }
    });
    
     
    document.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        returnToZero()
      }
  });
  return () => {
    document.removeEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        returnToZero()
      }
  });
}
  }, []);
  
 function returnToZero() {
  dragInstance.current[0].set({clearProps:"transform"})
 } 
  return (
    <div>
      <h2>React & GSAP Draggable</h2>

      <div className="draggable" ref={dragTarget}>
        <SynthKnob />
        Drag & Rotate
      </div>
      <div><h1>display rotation:{displayRotation.current}</h1></div>
    </div>
  );
}

export default DraggableRotate