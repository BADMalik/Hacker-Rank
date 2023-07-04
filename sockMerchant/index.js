function sockMerchant(n, ar) {
  let map = new Map();
  for (let i in ar) {
    if (map.has(ar[i])) {
      map.set(ar[i], map.get(ar[i]) + 1);
      continue;
    }
    map.set(ar[i], 1);
  }
  let count = 0;
  for (let i of map) {
    if (Math.floor(i[1] / 2) >= 1) {
      count += Math.floor(i[1] / 2);
    }
  }

  return count;
}
