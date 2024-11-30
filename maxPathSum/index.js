var solution = function (grid) {
  const rows = grid.length;
  const columns = grid[0].length;
  const dp = Array.from({ length: rows }, () => Array(columns).fill(0));
  const path = Array.from({ length: rows }, () => Array(columns).fill(""));

  // Initialize top-left corner
  dp[0][0] = grid[0][0];
  path[0][0] = "(0,0)";

  console.log({ path, dp });
  // Fill the first column
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
    path[i][0] = path[i - 1][0] + ` ↓ (${i},0)`;
  }
  console.log({ path, dp });

  // Fill the first row
  for (let j = 1; j < columns; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
    path[0][j] = path[0][j - 1] + ` → (0,${j})`;
  }

  console.log({ path, dp });
  // Fill the rest of the table
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      // if above of current is greater than the left of current index
      if (dp[i - 1][j] > dp[i][j - 1]) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
        path[i][j] = path[i - 1][j] + ` ↓ (${i},${j})`;
      } else {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
        path[i][j] = path[i][j - 1] + ` → (${i},${j})`;
      }
    }
  }

  // Return the result
  return {
    maxSum: dp[rows - 1][columns - 1],
    path: path[rows - 1][columns - 1],
  };
};

var inputGrid = [
  [1, 3, 1, 5],
  [6, 5, 1, 6],
  [4, 2, 1, 9],
  [4, 4, 1, 2],
];

console.log({ result: solution(inputGrid) });
