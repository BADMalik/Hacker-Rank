/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // Initialize an array to store the minimum coins for each amount from 0 to amount
  const dp = Array(amount + 1).fill(amount + 1);
  // Base case: 0 coins needed to make 0 amount
  dp[0] = 0;

  for (let coin of coins) {
    // console.log({dp})
    ///dp[i - coin] sub tract the coin value, 
    for (let i = coin; i <= amount; i++) {
      console.log(
        `i ${i},  coin ${coin}, dp[i-1] ${dp[i - 1]},  dp[i] ${
          dp[i]
        },  dp[i-coin] ${dp[i - coin]}, dp[i-coin] + 1 -> ${dp[i - coin] + 1} `
      );
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
    console.log({ dp });
  }

  return dp[amount] > amount ? -1 : dp[amount];
};

let res = coinChange([1, 5, 6, 9], 11);
console.log({ res });
