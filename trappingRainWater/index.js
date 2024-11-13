// Function to return the maximum water that can be stored
function trap(arr) {
  let st = [];
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    console.log({ st });
    // Pop all items smaller than arr[i]
    while (st.length > 0 && arr[st[st.length - 1]] < arr[i]) {
      let pop_height = arr[st.pop()];
      console.log({ strArr: arr[st[st.length - 1]] });
      if (st.length === 0) break;

      // arr[i] is the next greater for the removed item
      // and new stack top is the previous greater
      let distance = i - st[st.length - 1] - 1;

      // Take the minimum of two heights (next and prev greater)
      let water = Math.min(arr[st[st.length - 1]], arr[i]);

      // Find the amount of water
      water -= pop_height;

      res += distance * water;
    }
    st.push(i);
  }
  return res;
}

console.log({ data: trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]) });
