const palindrome = (s) => {
  let res = "";
  if (s.length === 1) return s;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (s[left] === s[right + 1]) {
      i++;
      right++;
    }

    while (left >= 0 && s[left] === s[right] && right < s.length) {
      console.log({
        left: left,
        right: right,
        sLeft: s[left],
        sRight: s[right],
      });
      if (right - left > res.length - 1) {
        res = s.slice(left, right );
        console.log({ res });
      }
      left--;
      right++;
    }
  }

  console.log({ res });
  return res;
};

palindrome("b666466666666POPc444bb");
