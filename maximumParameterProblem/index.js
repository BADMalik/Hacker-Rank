function maximumPerimeterTriangle(sticks) {
  // Write your code here
  sticks = sticks.sort((a, b) => a - b);
  let max = [0, 0, 0];
  let minusOne = true;
  for (let i = 0; i < sticks.length - 2; i++) {
    let sum = 0;
    if (sticks[i + 1] !== undefined && sticks[i + 2] !== undefined) {
      if (sticks[i] + sticks[i + 1] > sticks[i + 2]) {
        let sum = max.reduce((p, c) => {
          return (p = p + c);
        }, 0);
        if (sum < sticks[i] + sticks[i + 1] + sticks[i + 2]) {
          minusOne = false;
          max = [sticks[i], sticks[i + 1], sticks[i + 2]];
        }
      }
    }
  }

  let response;
  if (minusOne == true) {
    // response = -1;
    console.log(-1);
    return [-1];
  } else {
    response = max;
  }
  return response;
}
