const string = "adfbssdawerr";
let data = [];
let coolString = 0;
for (let i = 0; i < string.split("").length; i += 4) {
  data.push(string.slice(i, i + 4));
}
for (let i = 0; i < data.length; i++) {
  let obj = {};
  let subStringArray = data[i].split("");
  let result = true;
  subStringArray.forEach((data) => {
    if (obj[data]) {
      result = false;
    } else {
      obj[data] = data;
    }
    console.log({ obj, result });
  });
  if (result) {
    coolString++;
  }
}

console.log(data, coolString);
