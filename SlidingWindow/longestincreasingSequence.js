var lengthOfLIS = function (nums) {
  if (nums.length === 0) return 0;

  const dp = new Array(nums.length).fill(1); // Initialize DP array with 1

  for (let i = 1; i < nums.length; i++) {
    console.log({ i });
    for (let j = 0; j < i; j++) {
      console.log({ j });
      if (nums[i] > nums[j]) {
        console.log({ i, j, iv: dp[i], jv: dp[j] });
        dp[i] = Math.max(dp[i], dp[j] + 1);
        console.log(dp);
      }
    }
  }

  return Math.max(...dp); // Return the maximum length from the DP array
};

console.log({ Sol: lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]) });
