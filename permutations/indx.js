// console.log(permute([1, 2, 3]));

var dfspermute = function (nums) {
  const res = [];
  const visited = [];

  const dfs = (subset) => {
    // console.log({ subset });
    if (subset.length === nums.length) {
      console.log({ nums, visited, subset }, "reaced \n");
      res.push([...subset]); // Make a copy of subset
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      console.log({ nums, visited, subset, i }, "\n");
      if (!visited[i]) {
        // Pick the choice

        console.log({ nums, visited, subset, i }, "initial\n");
        visited[i] = true;
        subset.push(nums[i]);
        console.log({ visited, subset, i }, "before\n");

        // console.log({ subset, nums });
        dfs(subset);

        console.log({ visited, subset, i }, "after\n");
        // Undo the choice
        visited[i] = false;
        subset.pop();
      }
    }
  };

  dfs([]);
  return res;
};

console.log({ phind: dfspermute([4, 5, 3]) });
