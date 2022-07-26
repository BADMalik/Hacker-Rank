function processData(input) {
  // input = "C;V;can of coke\nS;M;sweatTea()\nS;V;epsonPrinter\nC;M;santa claus\nC;C;mirror"
  //Enter your code here

  // foreach()
  const lines = input.trim().split("\n");
  const totalLines = [];
  for (const line of lines) {
    totalLines.push(line.trim());
    // console.log("found line:", line);
  }
  let obj = [];
  // console.log(totalLines.length)
  for (const eachLine in totalLines) {
    // totalLines[index] = totalLines[index].trim();
    let splitOrCombine = totalLines[eachLine].split(";")[0];
    let methodClassOrValue = totalLines[eachLine].split(";")[1];
    let string = totalLines[eachLine].split(";")[2];
    obj.push({ SC: splitOrCombine, MCV: methodClassOrValue, string: string });
    // console.log(totalLines[eachLine]);
  }
  let finalString = "";
  for (const o of obj) {
    // console.log(o)
    if (o.SC === "S") {
      if (o.MCV === "V") {
        let splitString = o.string.split("");
        // console.log(splitString)
        for (const i in splitString) {
          // console.log(splitString[i])
          if (splitString[i].toUpperCase() === splitString[i]) {
            splitString[i] = splitString[i].toLowerCase();
            splitString.splice(i, 0, " ");
            // console.log(splitString)
            // return 0;
          }
        }
        splitString.push("\n");
        finalString += splitString.join("");
        // console.log(splitString)
      } else if (o.MCV === "C" || o.MCV === "M") {
        let classValue = o.string.split("");
        if (o.MCV === "M") {
          classValue = classValue.slice(0, -2);
        }
        // console.log(classValue, 'CVVV')
        for (const i in classValue) {
          // console.log(splitString[i])
          if (i == 0 && classValue[i].toUpperCase() === classValue[i]) {
            classValue[i] = classValue[i].toLowerCase();
          } else if (classValue[i].toUpperCase() === classValue[i]) {
            classValue[i] = classValue[i].toLowerCase();
            classValue.splice(i, 0, " ");
          }
        }
        classValue.push("\n");
        finalString += classValue.join("");
        // console.log(finalString)
      }
    }
    if (o.SC === "C") {
      if (o.MCV === "V") {
        let array = o.string.split(" ");
        for (const i in array) {
          if (i == 0) {
            array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1);
            // console.log(array[i])
          } else {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
          }
        }
        array.push("\n");
        array = array.join("");
        finalString += array;
      } else if (o.MCV === "C") {
        let array = o.string.split(" ");
        for (const i in array) {
          array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        }
        array.push("\n");
        finalString += array.join("");
      } else if (o.MCV === "M") {
        let array = o.string.split(" ");

        for (const i in array) {
          //  console.log(array[i],i,'asdw')
          if (i == 0) {
            array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1);
            // console.log(array[i])
          } else {
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
          }
        }
        if (o.MCV === "M") {
          array.push("()");
        }
        array.push("\n");
        array = array.join("");
        finalString += array;
      }
    }
    // if (o.SC)
    // console.log(finalString)
  }
  console.log(finalString);

  // console.log(totalLines)
  return finalString;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
