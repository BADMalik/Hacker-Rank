function lengthOfLongestSubstring(s) {
  if (s.length < 2) return s.length;
  let obj = {};
  for (let i = 0; i < s.length; i++) {
    let start = i;
    let end = i;
    let tempObj = {};
    while (s[end] && !tempObj[s[end]]) {
      while (start > 0 && !tempObj[s[start]]) {
        tempObj[s[start]] = true;
        start--;
      }
      tempObj[s[end]] = true;
      end++;
      i++;
    }
    if (Object.keys(tempObj).length > Object.keys(obj).length) {
      obj = { ...tempObj };
      tempObj = {};
    }
  }
  return Object.keys(obj).length;
}
