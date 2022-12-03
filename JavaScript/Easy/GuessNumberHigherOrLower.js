/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

/*
Constraints:
    1 <= n <= 231 - 1
    1 <= pick <= n
*/
var guessNumber = function (n) {

    // LeetCode tested code
    let min = 1;
    let max = n;
    let current = guess(n) == 0 ? n : Math.floor(max / 2); // checks if guessed 
    let result = guess(current);

    while (result != 0) {
        if (result == 1) {
            min = current;

        }
        else if (result == -1) {
            max = current;

        }

        current = Math.floor((min + max) / 2);
        result = guess(current);
    }

    return current;
    // end of code solution
};

// supporting codes for the problem...
const guess = num => {
    let testNum = 0;
    if (num < numPicked) {
        testNum = 1;
    }
    else if (num > numPicked) {
        testNum = -1;
    }

    return testNum;
}

const numGuessed = 2;
const numPicked = Math.floor(Math.random() * numGuessed + 1);


const returnedNum = guessNumber(numGuessed);
console.log("PICKED", numPicked, "RETURNED", returnedNum, numPicked === returnedNum);

//test logged into new computer