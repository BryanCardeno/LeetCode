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
 * Complete the 'minTime' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr1
 *  2. INTEGER_ARRAY arr2
 */

function minTime(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {}
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const arr1Count = parseInt(readLine().trim(), 10);

  let arr1 = [];

  for (let i = 0; i < arr1Count; i++) {
    const arr1Item = parseInt(readLine().trim(), 10);
    arr1.push(arr1Item);
  }

  const arr2Count = parseInt(readLine().trim(), 10);

  let arr2 = [];

  for (let i = 0; i < arr2Count; i++) {
    const arr2Item = parseInt(readLine().trim(), 10);
    arr2.push(arr2Item);
  }

  const result = minTime(arr1, arr2);

  console.log(result);
}
