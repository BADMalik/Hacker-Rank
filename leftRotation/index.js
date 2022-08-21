function rotateLeft(d, arr) {
  let data = arr;
  let i = 0;
  while (i < d) {
    let first = data.shift();
    data.push(first);
    i++;
  }
  return data;
}
