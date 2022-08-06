'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here
    // console.log(n.split('\n'));
    // if (n>0) {}
//    let first = true;
//     if (!first) {
        // let string = n.toString(2).padStart(32, "0").split('').reverse().join('');
        // let data = parseInt(string, 2);
        // console.log(data);
        // return
        return (2**32)-1-n;
    // } else {
    //     first = false;
    // }
    // console.log(n.toString(2));
    // let numbers = n.split("\n")
    // console.log(parseInt(n, 32));
    // let numbers = n.map(function(item) {
    //     return parseInt(item);
    // });
    // for(var i = 1; i < numbers.length; i++ ) {
    //     console.log((~numbers[i]) >>> 0);
    // }
    // console.log(typeof n)
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}
