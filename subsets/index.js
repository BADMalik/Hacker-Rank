function subsets(nums) {
  const result = [];

  function backtrack(start, currentSubset) {
    // Add the current subset to the result
    result.push([...currentSubset]);

    // Try including each element starting from `start` in the current subset
    for (let i = start; i < nums.length; i++) {
      // Include nums[i] in the current subset
      currentSubset.push(nums[i]);
      console.log({ currentSubset, i, start });
      // Recur to add more elements
      backtrack(i + 1, currentSubset);
      // Remove nums[i] from the current subset (backtrack)
      currentSubset.pop();
      console.log("iBIlal".repeat(5), { currentSubset });
    }
  }

  // Start backtracking with an empty subset
  backtrack(0, []);
  return result;
}

function permute(nums) {
  const result = [];
  const visited = {};
  function backtrack(current) {
    // Add the current subset to the result
    if (current.length === nums.length) {
      result.push([...current]);
      return;
    }

    // Try including each element starting from `start` in the current subset
    for (let i = 0; i < nums.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        current.push(nums[i]);
        backtrack(current);
        current.pop();
        visited[i] = false;
      }
    }
  }

  // Start backtracking with an empty subset
  backtrack([]);
  return result;
}

console.log(permute([4, 5, 3]));
