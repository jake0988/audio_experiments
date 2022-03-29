import React from "react";
import { note } from "./Note";

export function handleKeyDown(e) {
  // console.log(e.key);
  switch (e.key) {
    case "q":
      return note("Eb3");
    case "a":
      return note("E3");
    case "s":
      return note("F3");
    case "e":
      return note("Gb3");
    case "d":
      return note("G3");
    case "r":
      return note("Ab3");
    case "f":
      return note("A3");
    case "t":
      return note("Bb3");
    case "g":
      return note("B3");
    case "h":
      return note("C4");
    case "u":
      return note("Db4");
    case "j":
      return note("D4");
    case "i":
      return note("Eb4");
    case "k":
      return note("E4");
    default:
      return "0";
  }
}

export function handleKeyUp(e) {
  // console.log(e.key);
  switch (e.key) {
    case "q":
      return note("Eb3", "y");
    case "a":
      return note("E3", "y");
    case "s":
      return note("F3", "y");
    case "e":
      return note("Gb3", "y");
    case "d":
      return note("G3", "y");
    case "r":
      return note("Ab3", "y");
    case "f":
      return note("A3", "y");
    case "t":
      return note("Bb3", "y");
    case "g":
      return note("B3", "y");
    case "h":
      return note("C4", "y");
    case "u":
      return note("Db4", "y");
    case "j":
      return note("D4", "y");
    case "i":
      return note("Eb4", "y");
    case "k":
      return note("E4", "y");
    default:
      return "0";
  }
}
