/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  const backtrack = (current, remaining) => {
    console.log("NEW ->->->->->->->", { remaining, current });
    if (remaining.length === 0) {
      console.log({ slice: current.slice() });
      result.push(current.slice());
      return;
    }
    console.log(
      "================================================================ "
    );
    for (let i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      console.log({ remaining });
      let firstHalf = remaining.slice(0, i);
      let secondHalf = remaining.slice(i + 1);
      console.log({ current, firstHalf, secondHalf, i });
      backtrack(current, firstHalf.concat(secondHalf));
      console.log("++++++++++++++++++++++++++++++++++++++++++++++++", {
        i,
        current,
        remaining,
        result,
      });
      current.pop();
    }
  };

  backtrack([], nums);
  return result;
};

console.log(permute([1, 2, 3]));
