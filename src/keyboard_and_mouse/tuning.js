
export function createScale(num, den, origFreq) {
  const freqArr = []
  for (let i = 0; i < num.length; i++) {  
    const fraction = ((num * origFreq) / den)
    freqArr.push(fraction)    
  }
  return freqArr
}

  

