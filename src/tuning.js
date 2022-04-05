import React from "react";
import { useState } from "react";
import { justIntNumerator } from "./scaleFunctions";
import { justIntDenominator } from "./scaleFunctions";

export function tuning(num, den) {
  const origFreq = 155.56
  function scale(a, b) {
    return (Math.log10(a/b)) * (1200/Math.log10(2))
  }
  const n = num
  const d = den
  createScale(n, d)
  function createScale(numerator, denominator){
    const scaleArr = [origFreq]
    let fraction;
    for (let i = 0; i < numerator.length; i++) {
      fraction = scale(numerator[i], denominator[i]) + origFreq
      scaleArr.push(fraction)
    }
    return scaleArr
  }

  return createScale(num, den)
}

