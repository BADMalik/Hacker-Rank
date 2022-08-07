"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
  // Write your code here

  let length = matrix.length / 2;
  let secondArray = [];
  let max = matrix.length;

  console.log(matrix);
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let one = matrix[i][j];
      let second = matrix[i][max - j - 1];
      let third = matrix[max - i - 1][j];
      let fourth = matrix[max - 1 - i][max - 1 - j];
      secondArray.push([one, second, third, fourth]);
    }
  }
  console.log(secondArray);
  let finalArray = secondArray.map((el) => {
    return Math.max(...el);
  });
  console.log(finalArray);
  return finalArray.reduce((p, c) => {
    p = p + c;
    return p;
  }, 0);
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const n = parseInt(readLine().trim(), 10);

    let matrix = Array(2 * n);

    for (let i = 0; i < 2 * n; i++) {
      matrix[i] = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map((matrixTemp) => parseInt(matrixTemp, 10));
    }

    const result = flippingMatrix(matrix);

    ws.write(result + "\n");
  }

  ws.end();
}
