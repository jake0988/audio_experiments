import { handleKeyDown } from "../cpu_keyboard/synth";
import { handleKeyUp } from "../cpu_keyboard/synth";

export const scaleObject = {
  temperament: {
    equal: [
      1,
      Math.pow(2, 1 / 12),
      Math.pow(2, 2 / 12),
      Math.pow(2, 3 / 12),
      Math.pow(2, 4 / 12),
      Math.pow(2, 5 / 12),
      Math.pow(2, 6 / 12),
      Math.pow(2, 7 / 12),
      Math.pow(2, 8 / 12),
      Math.pow(2, 9 / 12),
      Math.pow(2, 10 / 12),
      Math.pow(2, 11 / 12),
      2,
      2 * Math.pow(2, 1 / 12),
      2 * Math.pow(2, 2 / 12),
    ],
    just_intonation: [
      1,
      16 / 15,
      9 / 8,
      8 / 7,
      7 / 6,
      6 / 5,
      11 / 9,
      5 / 4,
      9 / 7,
      1323 / 1024,
      21 / 16,
      4 / 3,
      7 / 5,
      3 / 2,
      2,
    ],
  },
};

export function scaleChooser(temperament, origFreq) {
  console.log("Scale Chooser temperament", temperament);
  switch (temperament) {
    case "Equal Temperament":
      return scaleConverter(scaleObject.temperament.equal, origFreq);

    case "Just Intonation":
      return scaleConverter(scaleObject.temperament.just_intonation, origFreq);
    default:
      return "";
  }
}

export function scaleConverter(arr, origFreq) {
  const convertedArr = [];
  for (let i = 0; i < arr.length; i++) {
    convertedArr.push(arr[i] * origFreq);
  }
  return convertedArr;
}

export function upOrDown(e, note) {
  if (e.type === "keydown") {
    return handleKeyDown(e, note);
  } else if (e.type === "keyup") {
    return handleKeyUp(e, note);
  }
}

export function singleNote(temperament, note) {
  const frequency = temperament[note];
  return frequency;
}

export function letterToNumberConvertor(e) {
  switch (e.key) {
    case "q":
      return 0;
    case "a":
      return 1;
    case "s":
      return 2;
    case "e":
      return 3;
    case "d":
      return 4;
    case "r":
      return 5;
    case "f":
      return 6;
    case "t":
      return 7;
    case "g":
      return 8;
    case "h":
      return 9;
    case "u":
      return 10;
    case "j":
      return 11;
    case "i":
      return 12;
    case "k":
      return 13;
    default:
      return "";
  }
}

  export function noteToNumberConvertor(note) {
    switch (note) {
      case "Eb3":
        return 0;
      case "E3":
        return 1;
      case "F3":
        return 2;
      case "Gb3":
        return 3;
      case "G3":
        return 4;
      case "Ab3":
        return 5;
      case "A3":
        return 6;
      case "Bb3":
        return 7;
      case "B3":
        return 8;
      case "C4":
        return 9;
      case "Db4":
        return 10;
      case "D4":
        return 11;
      case "Eb4":
        return 12;
      case "E4":
        return 13;
      default:
        return "";
    }
}
