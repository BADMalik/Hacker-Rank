const matches = (a, b) => {
  console.log({ a, b });
  if (Object.keys(a).length !== Object.keys(b).length) return false;
  for (let key in a) {
    if (a[key] !== b[key]) return false;
  }
  return true;
};
function findAnagrams(s, p) {
  const result = [];
  const pLength = p.length;
  const sLength = s.length;

  if (pLength > sLength) return result;

  // Create frequency maps for `p` and the initial window in `s`
  const pCount = {};
  const windowCount = {};

  // Initialize frequency maps
  for (let i = 0; i < pLength; i++) {
    pCount[p[i]] = (pCount[p[i]] || 0) + 1;
    windowCount[s[i]] = (windowCount[s[i]] || 0) + 1;
  }
  console.log({ pCount, windowCount });

  // Helper function to compare two frequency maps

  // Check initial window
  if (matches(pCount, windowCount)) result.push(0);
  console.log({ result });
  // Slide the window over `s`
  for (let i = pLength; i < sLength; i++) {
    // Include new character in the window
    const charIn = s[i];
    console.log({ charIn });
    windowCount[charIn] = (windowCount[charIn] || 0) + 1;
    console.log({ windowCount });
    // Remove the character that's left the window
    const charOut = s[i - pLength];
    if (windowCount[charOut] === 1) {
      delete windowCount[charOut];
    } else {
      windowCount[charOut] -= 1;
    }

    // Check if current window matches the `p` count
    if (matches(pCount, windowCount)) {
      result.push(i - pLength + 1);
    }
  }

  return result;
}

console.log({ result: findAnagrams((s = "cbaebabacd"), (p = "abc")) });
