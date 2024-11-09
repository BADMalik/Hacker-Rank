function getAllSubstrings(str) {
  let results = [];
  let longest = {
    length: 0,
    string: "",
  };
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      results.push(str.slice(i, j));
    }
  }
  console.log({results})
  for (let i = 0; i < results.length; i++) {
    if (results[i].length < longest.length) {
      continue;
    }

    if (
      results[i].length > longest.length &&
      results[i].split("").reverse().join("") == results[i]
    ) {
      longest = {
        length: results[i].length,
        string: results[i],
      };
      console.log(longest);
    }
  }

  return longest;
}

var theString = "aeeebeeea";
console.log(getAllSubstrings(theString));
