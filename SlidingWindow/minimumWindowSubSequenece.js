function minWindow(str1, str2) {
  let sizeStr1 = str1.length;
  let sizeStr2 = str2.length;
  let minSubLen = Infinity;
  let indexS1 = 0;
  let indexS2 = 0;
  let minSubsequence = "";
  while (indexS1 < sizeStr1) {
    if (str1[indexS1] === str2[indexS2]) {
      indexS2++;
      if (indexS2 === sizeStr2) {
        let start = indexS1;
        let end = indexS1;
        indexS2--;
        while (indexS2 >= 0) {
          if (str1[start] === str2[indexS2]) {
            indexS2--;
          }
          start--;
        }
        start++;
        if (end - start + 1 < minSubLen) {
          minSubLen = end - start + 1;
          minSubsequence = str1.slice(start, end + 1);
        }
        indexS1 = start;
        indexS2 = 0;
      }
    }
    indexS1++;
  }
  return minSubsequence;
}

// driver code
function main() {
  const str1 = [
    "abcdedeaqdweq",
    "abcdebdde",
    "fgrqsqsnodwmxzkzxwqegkndaa",
    "zxcvnhss",
    "alpha",
  ];
  const str2 = ["aqeq", "bde", "kzed", "css", "la"];

  for (let i = 0; i < str1.length; i++) {
    console.log(`${i + 1}. \tInput string: (${str1[i]}, ${str2[i]})`);
    console.log(`\tSubsequence string: ${minWindow(str1[i], str2[i])}`);
    console.log("-".repeat(100));
  }
}

main();

// Solution summary
// Initialize two indexes, indexS1 and indexS2, to zero for iterating both strings.

// If the character pointed by indexS1 in str1 is the same as the character pointed by indexS2 in str2, increment both pointers. Otherwise, only increment indexS1.

// Once indexS2 reaches the end of str2, initialize two new indexes (start and end). With these two indexes, we’ll slide the window backward.

// Set start and end to indexS1.

// If the characters pointed to by indexS2 and start are the same, decrement both of them. Otherwise, only decrement start.

// Once, str2 has been discovered in str1 in the backward direction, calculate the length of the substring.

// If this length is less than the current minimum length, update the minSubLen variable and the minSubsequence string.

// Resume the search in the forward direction from start
// +
// 1
// +1
//  in str1.

// Repeat until indexS1 reaches the end of str1.
