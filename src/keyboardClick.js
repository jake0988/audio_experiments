import React from "react";
import { polyNoteNoE } from "./PolyNote";
import { polyNoteUp } from "./PolyNote";
import { polyNote } from "./PolyNote";


export function handleKeyDown(e) {
  e.preventDefault() 
  e.stopPropagation();
 console.log("Downkey", e.key)
 
  switch (e.key) {
    case "q":
      return polyNote(e, "Eb3");
    case "a":
      return polyNote(e, "E3");
    case "s":
      return polyNote(e, "F3");
    case "e":
      return polyNote(e, "Gb3");
    case "d":
      return polyNote(e, "G3");
    case "r":
      return polyNote(e, "Ab3");
    case "f":
      return polyNote(e, "A3");
    case "t":
      return polyNote(e, "Bb3");
    case "g":
      return polyNote(e, "B3");
    case "h":
      return polyNote(e, "C4");
    case "u":
      return polyNote(e, "Db4");
    case "j":
      return polyNote(e, "D4");
    case "i":
      return polyNote(e, "Eb4");
    case "k":
      return polyNote(e, "E4");
    default:
      return "0";
  }
}

export function handleKeyUp(e) {
  console.log(e.key);
  switch (e.key) {
    case "q":
      return polyNoteUp("Eb3");
    case "a":
      return polyNoteUp("E3");
    case "s":
      return polyNoteUp("F3");
    case "e":
      return polyNoteUp("Gb3");
    case "d":
      return polyNoteUp("G3");
    case "r":
      return polyNoteUp("Ab3");
    case "f":
      return polyNoteUp("A3");
    case "t":
      return polyNoteUp("Bb3");
    case "g":
      return polyNoteUp("B3");
    case "h":
      return polyNoteUp("C4");
    case "u":
      return polyNoteUp("Db4");
    case "j":
      return polyNoteUp("D4");
    case "i":
      return polyNoteUp("Eb4");
    case "k":
      return polyNoteUp("E4");
    default:
      return "0";
  }
}
