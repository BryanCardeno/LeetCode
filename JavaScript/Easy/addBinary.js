/*
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.
*/
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = function (a, b) {
    let length = 0;
    if (parseInt(a, 2) > parseInt(b, 2)) {
        b = b.padStart(a.length, "0");
        length = a.length;
    }
    else {
        a = a.padStart(b.length, "0");
        length = b.length
    }

    let newString = "";
    let remainder = 0;
    let divisible = 0;

    for (let i = length - 1, j = 0; i >= 0; i--) {
        j = parseInt(a[i]) + parseInt(b[i]) + divisible;
        remainder = j % 2;
        divisible = Math.floor(j / 2);

        newString = remainder + newString;

        if (i == 0 && divisible == 1) {
            newString = divisible + newString;
        }

    }
    return newString;
}

const strA = "111";
const strB = "1010";


console.assert(addBinary(strA, strB) == "10001", "test 1");



