function migratoryBirds(ar) {
  let map = new Map();
  for (let i in ar) {
    if (map.has(ar[i])) {
      let prev = map.get(ar[i]);
      map.set(ar[i], prev + 1);
    } else {
      map.set(ar[i], 1);
    }
  }
  let max = { 0: 0, 1: 0 };
  for (const i of map) {
    if (i[1] > max[1]) {
      max = i;
    } else if (max[1] == i[1]) {
      if (max[0] > i[0]) {
        max = i;
      }
    }
  }
  return max[0];
}
