/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**

  Code Walk-through
  We start with nums = [1, 2, 3]. This array is clearly larger than 0 or 1 elements, so we skip through the first conditionals and hit the first loop.
  When i = 0, the currentNum = 1 and remainingNum = [2, 3] (lines 6 and 7 of the code)
  Line 9: We initialize a variable called remainingNumsPermuted to house the result of permute([2 ,3]). So let’s see what the result of that is…
  We start back to the top with the recursion, and again, the array is larger than 0 and 1. So we skip those conditionals.
  In this recursion call, when i = 0, currentNum = 2, and remainingNum = [3].
  Again, we initialize a variable called remainingNumsPermuted to house the result of permute([3]). So let’s see what the result of that is…
  We start back to the top with the recursion, but this time, the recursion was called with an array of just one element: 3. So we hit one conditional and return [3] (line 4).
  Now that the second recursion call has an answer, it can take its currentNum of 2, and concatenate that with the result of remainingNumsPermuated[0], which is 3 (line 11).
  Line 13: So now [2, 3] is pushed to result. This recursion call is now complete.
  Line 5: We’re back to the second recursion call, and i is now incremented to 1.
  currentNum = 3, and remainingNums = [2]
  Again, we initialize a variable called remainingNumsPermuted to house the result of permute([2]). And just as when it was called with [3], a [2] is returned to the previous recursion call.
  Now that the second recursion call has an answer from when i = 1, it can take its currentNum of 3, and concatenate that with the result of remainingNumsPermuated[1], which is 2.
  So now [3, 2] is pushed to result. This recursion call is now complete.
  Now the first recursion call has two answers waiting to get resolved: one array [2, 3], and another [3, 2].
  For each one of these, it’s going to take its currentNum (1), concatenate these results (line 10).
  So [1, 2, 3] and [1, 3, 2] get pushed into this recursion call’s results array (line 13).
  Line 5: This recursion call’s i is now incremented to 1, and currentNum = 2.
  At this point, the exact same process happens again. This call will ultimately concatenate [1, 3], [3, 1] to 2, and push those results to the results array. And finally, once again when the currentNum = 3, it will concatenate [1 ,2] and [2, 1] to 3.

  At the end of that last concatenation, results is returned with [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
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
var permute = function (arr) {
  // console.log({ arr, turn });
  let resultArr = [];
  if (arr.length === 0) return [];
  if (arr.length === 1) return [arr];
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    // console.log({ sliced: arr.slice(0, i), arr });
    const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
    // console.log({ currentNum, remainingNums, i });
    const swappedPermutation = permute(remainingNums);

    // console.log({ swappedPermutation });
    for (let j = 0; j < swappedPermutation.length; j++) {
      const finalSwappedPermutation = [currentNum].concat(
        swappedPermutation[j]
      );
      // console.log({ finalSwappedPermutation });
      resultArr.push(finalSwappedPermutation);
      // console.log({ resultArr, arr });
      // console.log("==========================================================");
    }
  }
  console.log({resultArr})
  return resultArr;
};

permute([2, 4, 6, 1]);
