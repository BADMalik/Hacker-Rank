function pageCount(n, p) {
  // Write your code here
  let startCount = 0;
  let endCount = 0;

  for (let i = 1; i < n; i += 2) {
    if (i == 1 && p == 1) {
      return 0;
      break;
    } else {
      if (i == p || i - 1 == p) {
        console.log("adwd", i, p, startCount);
        break;
      }
      startCount++;
    }
  }
  for (let j = n - 1; j >= 1; j -= 2) {
    if (n - p == 1 && n % 2 == 0) {
      return 1;
    }
    if (n - p == 1 && n % 2 == 1) {
      return 0;
    }
    if (j == n - 1 && p == n) {
      return 0;
      break;
    } else {
      if (j == p || j + 1 == p) {
        break;
      }
      endCount++;
    }
  }
  console.log(startCount, endCount);
  if (endCount < startCount) {
    return endCount;
  }
  return startCount;
}
