/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const backtrack = (current, remaining) => {
    if (remaining.length === 0) {
      result.push(current.slice());
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      let firstHalf = remaining.slice(0, i);
      let secondHalf = remaining.slice(i + 1);
      backtrack(current, firstHalf.concat(secondHalf));      
      current.pop();
    }
  };

  backtrack([], nums);
  return result;
};

console.log(permute([1, 2, 3]));
