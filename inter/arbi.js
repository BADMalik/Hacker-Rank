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
  [6, 0],
];

let obj = {};

data.forEach((e, i) => {
  if (obj[e[0]]) {
    if (obj[e[0]][e[1]]) {
      obj[e[0]][e[1]]++;
    } else {
      obj[e[0]][e[1]] = 1;
    }
  } else {
    obj[e[0]] = {};
    obj[e[0]][e[1]] = 1;
  }
});

let result;
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    result = obj[key][0] === obj[key][1];
    if (!result) {
      break;
    }
  }
}
