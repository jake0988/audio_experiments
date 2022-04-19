import React from "react";
import { polyNoteNoE } from "./PolyNote";
import { polyNoteUp } from "./PolyNote";
import { polyNote } from "./PolyNote";
import { justIntNumerator } from "../keyboard_and_mouse/scaleFunctions";
import { justIntDenominator } from "../keyboard_and_mouse/scaleFunctions";
import { tuning } from "../keyboard_and_mouse/tuning";
import { createScale } from "../keyboard_and_mouse/tuning";

export function handleKeyDown(e, note) {
  e.preventDefault();
  e.stopPropagation();
  console.log("Downkey", e.key);
  //  const t = tuning note)

  switch (e.key) {
    case "q":
      return polyNote(e, note);
    case "a":
      return polyNote(e, note);
    case "s":
      return polyNote(e, note);
    case "e":
      return polyNote(e, note);
    case "d":
      return polyNote(e, note);
    case "r":
      return polyNote(e, note);
    case "f":
      return polyNote(e, note);
    case "t":
      return polyNote(e, note);
    case "g":
      return polyNote(e, note);
    case "h":
      return polyNote(e, note);
    case "u":
      return polyNote(e, note);
    case "j":
      return polyNote(e, note);
    case "i":
      return polyNote(e, note);
    case "k":
      return polyNote(e, note);
    default:
      return "0";
  }
}

export function handleKeyUp(e, note) {
  switch (e.key) {
    case "q":
      return polyNoteUp(e, note);
    case "a":
      return polyNoteUp(e, note);
    case "s":
      return polyNoteUp(e, note);
    case "e":
      return polyNoteUp(e, note);
    case "d":
      return polyNoteUp(e, note);
    case "r":
      return polyNoteUp(e, note);
    case "f":
      return polyNoteUp(e, note);
    case "t":
      return polyNoteUp(e, note);
    case "g":
      return polyNoteUp(e, note);
    case "h":
      return polyNoteUp(e, note);
    case "u":
      return polyNoteUp(e, note);
    case "j":
      return polyNoteUp(e, note);
    case "i":
      return polyNoteUp(e, note);
    case "k":
      return polyNoteUp(e, note);
    default:
      return "0";
  }
}
