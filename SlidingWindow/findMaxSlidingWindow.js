function findMaxSlidingWindow(nums, w) {
  let res = null;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i + w;
    if (j <= nums.length) {
      let dataSet = nums.slice(i, j);
      // get sum of all data in dataSet
      let sum = dataSet.reduce((a, b) => a + b, 0);
      // if sum is greater than max, set max to sum
      if (sum > max) {
        max = sum;
        res = dataSet;
      }
    }
  }
  return res;
}
console.log(findMaxSlidingWindow([1, 2, 3, 9, 10, 4, 5, 6, 7, 1], 3));
