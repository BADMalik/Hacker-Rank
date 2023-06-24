function minWindow(str1, str2) {
  let mainStringLength = str1.length;
  let subStringLength = str2.length;

  /**
   * Create pointers for both strings
   */
  let mainStringIndex = 0;
  let subStringIndex = 0;
  let subSequence = "";

  let minSubSequenceLength = Number.MAX_SAFE_INTEGER;

  let start = -1;
  let end = -1;
  while (mainStringIndex < mainStringLength) {
    if (str1[mainStringIndex] === str2[subStringIndex]) {
      if (subStringIndex === 0) {
        start = mainStringIndex;
      }

      if (subStringIndex === subStringLength - 1) {
        end = mainStringIndex;
        if (end - start + 1 < minSubSequenceLength) {
          minSubSequenceLength = end - start + 1;
          subSequence = str1.substring(start, end + 1);
        }
        subStringIndex = 0;
        start = mainStringIndex + 1;
      }
      subStringIndex++;
    }
    mainStringIndex++;
  }
  if (subSequence.length === 0) {
    return "No subsequence found";
  } else {
    return subSequence;
  }
}
function main() {
  const str1 = [
    "abcdebddeabcdebdde",
    "fgrqsqsnodwmxzkzxwqegkndaa",
    "zxcvnhss",
    "alpha",
    "beta",
  ];
  const str2 = ["bde", "kzed", "css", "la", "ab"];

  // let's uncomment the following test case and verify the result
  // str1.push("abcdedeaqdweq");
  // str2.push("aqeq");

  for (let i = 0; i < str1.length; i++) {
    console.log(`${i + 1}. \tInput string: (${str1[i]}, ${str2[i]})`);
    console.log(`\tSubsequence string: ${minWindow(str1[i], str2[i])}`);
    console.log("-".repeat(100));
  }
}

main();
