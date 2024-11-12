// console.log(permute([1, 2, 3]));

var dfspermute = function (nums) {
  const res = [];
  const visited = [];

  const dfs = (subset, level) => {
    // console.log({ subset });
    if (subset.length === nums.length) {
      console.log({ nums, visited, subset }, "reaced \n");
      res.push([...subset]); // Make a copy of subset
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      console.log({ level, visited, subset, i }, "\n");
      if (!visited[i]) {
        // Pick the choice

        
        console.log({ level, visited, subset, i }, "initial\n");
        visited[i] = true;
        subset.push(nums[i]);
        console.log({ level, visited, subset, i }, "before\n");

        // console.log({ subset, nums });
        dfs(subset, level + 1);

        console.log({ level, visited, subset, i }, "after\n");
        // Undo the choice
        visited[i] = false;
        subset.pop();
      }
    }
  };

  dfs([], 0);
  return res;
};

console.log({ phind: dfspermute([4, 5, 3]) });
