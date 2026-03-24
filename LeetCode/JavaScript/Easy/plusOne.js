/*
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.

*/

// used to assert if returned array is what is expected
const compareArrays = (a1, a2) => {
    let isEqual = false; // default return parameter

    if (a1.length == a2.length) { // checks both array has the same length
        for (let i = 0; i < a1.length; i++) {
            if (a1[i] != a2[i]) {
                isEqual = false;
                break;
            }
            isEqual = true;
        }
    }

    return isEqual;
}

var plusOne = function (digits) {
    let length = digits.length;

    digits[length - 1] += 1;
    for (let i = length - 1; i > -1; i--) {

        if (digits[i] == 10) {
            digits[i] = 0;
            if (i == 0) {
                digits.splice(i, 0, 1);
            }
            digits[i - 1] += 1;
        }
    }
    return digits;
}

// test params for the problem
const test1 = plusOne([9]);
const result1 = [1, 0];

const test2 = plusOne([1, 2, 3]);
const result2 = [1, 2, 4];

const test3 = plusOne([1, 5, 9]);
const result3 = [1, 6, 0];

console.assert(compareArrays(test1, result1) == true, "test1");
console.assert(compareArrays(test2, result2) == true, "test2");
console.assert(compareArrays(test3, result3) == true, "test3");