/*
 * Complete the 'findTaskPairForSlot' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY taskDurations
 *  2. INTEGER slotLength
 */

function findTaskPairForSlot(taskDurations, slotLength) {
  console.log("taskduration", taskDurations);
  console.log("slotlength", slotLength);

  // Write your code here
  const map = new Map();

  for (let i = 0; i < taskDurations.length; i++) {
    const val = slotLength - taskDurations[i];

    if (!map.has(val)) {
      map.set(taskDurations[i], i);
      continue;
    }

    const mapVal = map.get(val);

    if (mapVal > i) {
      return [i, mapVal];
    }

    return [mapVal, i];
  }

  return [-1, -1];
}

// function main() {
//     const taskDurationsCount = parseInt(readLine().trim(), 10);

//     let taskDurations = [];

//     for (let i = 0; i < taskDurationsCount; i++) {
//         const taskDurationsItem = parseInt(readLine().trim(), 10);
//         taskDurations.push(taskDurationsItem);
//     }

//     const slotLength = parseInt(readLine().trim(), 10);

//     const result = findTaskPairForSlot(taskDurations, slotLength);

//     process.stdout.write(result.join('\n') + '\n');
// }
const slotMin = 1;
const slotMax = 10;
const taskMin = 0;
const taskMax = 10;
const taskLengthMax = 1000000;

for (let outer = 0; outer < 10; outer++) {
  const rand = Math.random() * (slotMax - slotMin) + slotMin;
  const numSet = [];
  for (let i = 0; i < 10; i++) {
    numSet.push(Math.floor(Math.random() * (taskMax - taskMin) + taskMin));
  }
  console.log(findTaskPairForSlot(numSet, Math.floor(rand)));
}

// for(let i = 0; i < 10; i++) {
//     console.log(findTaskPairForSlot(numSet, Math.floor(rand)));
// }
