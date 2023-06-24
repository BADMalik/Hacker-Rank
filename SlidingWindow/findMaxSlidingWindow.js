function findMaxSlidingWindow(nums, w) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let j = i + w;
    if (j <= nums.length) {
      let dataSet = nums.slice(i, j);
      let sum = dataSet.sort((a, b) => a - b)[dataSet.length - 1];
      res.push(sum);
    }
  }
  return res;
}

console.log(findMaxSlidingWindow([1, 2, 3, 9, 10, 4, 5, 6, 7, 1], 3));
