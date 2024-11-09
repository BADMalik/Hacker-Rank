var lengthOfLIS = function(nums) {
    if (nums.length === 0) return 0;
    
    const dp = new Array(nums.length).fill(1); // Initialize DP array with 1
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp); // Return the maximum length from the DP array
};