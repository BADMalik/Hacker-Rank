function twoArrays(k, A, B) {
  // Write your code here
  let a = A.sort((a, b) => a - b);
  let b = B.sort((a, b) => b - a);
  console.log(a, b);
  for (const i in a) {
    if (!(a[i] + b[i] >= k)) {
      return "NO";
    }
  }
  return "YES";
}
