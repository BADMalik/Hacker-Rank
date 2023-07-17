let data = [
  [1, 0],
  [2, 0],
  [3, 0],
  [4, 0],
  [5, 0],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [6, 1],
];

const checkValidPairs = (data) => {
  let map = new Map();

  for (let i = 0; i < data.length; i++) {
    let key = data[i][0];
    let value = data[i][1];
    if (map.has(key)) {
      if (map.get(key) === true) {
        continue;
      } else {
      }
    }
  }
};
