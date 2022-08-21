function pickingNumbers(a) {
  let data = a.sort((i, j) => i - j);

  let response = [];
  let subArray = [];
  let broken = false;
  let start = data[0];
  for (let i = 0; i < data.length; i++) {
    if (Math.abs(start - data[i]) <= 1) {
      subArray.push(data[i]);
    } else {
      response.push(subArray);
      subArray = [];
      start = data[i];
      subArray.push(data[i]);
      broken = false;
    }
    if (i == data.length - 1) {
      response.push(subArray);
    }
  }
  // console.log(response)
  let res = response.sort((a, b) => b.length - a.length);
  // console.log(res)
  return res[0].length;
}
