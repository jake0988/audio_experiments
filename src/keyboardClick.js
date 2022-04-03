import React from "react";
import { polyNoteNoE } from "./PolyNote";
import { polyNoteUp } from "./PolyNote";

export function handleKeyDown(e) {
  // console.log(e.key);
  switch (e.key) {
    case "q":
      return polyNoteNoE("Eb3");
    case "a":
      return polyNoteNoE("E3");
    case "s":
      return polyNoteNoE("F3");
    case "e":
      return polyNoteNoE("Gb3");
    case "d":
      return polyNoteNoE("G3");
    case "r":
      return polyNoteNoE("Ab3");
    case "f":
      return polyNoteNoE("A3");
    case "t":
      return polyNoteNoE("Bb3");
    case "g":
      return polyNoteNoE("B3");
    case "h":
      return polyNoteNoE("C4");
    case "u":
      return polyNoteNoE("Db4");
    case "j":
      return polyNoteNoE("D4");
    case "i":
      return polyNoteNoE("Eb4");
    case "k":
      return polyNoteNoE("E4");
    default:
      return "0";
  }
}

export function handleKeyUp(e) {
  // console.log(e.key);
  switch (e.key) {
    case "q":
      return polyNoteUp("Eb3", "y");
    case "a":
      return polyNoteUp("E3", "y");
    case "s":
      return polyNoteUp("F3", "y");
    case "e":
      return polyNoteUp("Gb3", "y");
    case "d":
      return polyNoteUp("G3", "y");
    case "r":
      return polyNoteUp("Ab3", "y");
    case "f":
      return polyNoteUp("A3", "y");
    case "t":
      return polyNoteUp("Bb3", "y");
    case "g":
      return polyNoteUp("B3", "y");
    case "h":
      return polyNoteUp("C4", "y");
    case "u":
      return polyNoteUp("Db4", "y");
    case "j":
      return polyNoteUp("D4", "y");
    case "i":
      return polyNoteUp("Eb4", "y");
    case "k":
      return polyNoteUp("E4", "y");
    default:
      return "0";
  }
}
