/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; // If the array is empty, return an empty string

 let prefix = strs[0]; // Start with the first string as the initial prefix
 for (let i = 1; i < strs.length; i++) {
   while (strs[i].indexOf(prefix) !== 0) {
     prefix = prefix.slice(0, -1); // Shorten the prefix by removing the last character
     if (prefix === "") return ""; // If prefix becomes empty, return an empty string
   }
   console.log("wassup : ", prefix)
 }

 return prefix;
};