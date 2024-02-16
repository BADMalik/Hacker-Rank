/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 Input: integer array (nums)
 Output: array of all possible permutations 

 Clarifications:
 permutation = all possible combinations of a given input (all being same length as input)
 input array is non-empty and not sorted in any particular order
 all elements in nums is unique 
 input array includes +/- integers
 length of nums is 1 to 6
 can return the answer in any order 

 Edge Cases:
 each permutation should be of same length as the input array
 --> unlike subsets problem where we have different length elements. 
 --> only add a permutation once it's of same length as the input 

 Solution:
 start by initializing an output array and a permutations array
 --> output array will hold our resulting elements
 --> permutations array will hold every new permutation that is not yet of length (nums.length)
 --> push an empty array to the permutations array to begin
 start by looping through each element in the nums array
 --> save the current number to a variable
 --> save the length of current permutations
 then create a loop for the current length of the permutations array 
 
 ex. [1, 2, 3] 
 --> length = 3
 --> permutations = 3! = 3 * 2 * 1 = 6 possible permutations

 Time Complexity: O(n * n!) 
 Space Complexity: O(n * n!)
  */
let turn = 0;
var permute = function (arr) {
  turn++;
  let resultArr = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];
  console.log({ arr, turn });
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
    console.log({ currentNum, remainingNums });
    const swappedPermutation = permute(remainingNums);

    console.log({ swappedPermutation });
    for (let j = 0; j < swappedPermutation.length; j++) {
      const finalSwappedPermutation = [currentNum].concat(
        swappedPermutation[j]
      );
      console.log({ finalSwappedPermutation });
      resultArr.push(finalSwappedPermutation);
      console.log(resultArr, arr, { depth: null });
    }
  }

  return resultArr;
};

permute([2, 4, 6, 1]);
