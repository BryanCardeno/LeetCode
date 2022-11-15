/**
 * Given an integer x, 
 * return true if x is a palindrome, and false otherwise.
 * 
 * @param {number} x
 * @return {boolean}
 * 
 * Constraints:
 *   -231 <= x <= 231 - 1
 */
 var isPalindrome = function(x) {
    // leetcode solution below
    let xToString = x.toString();
    let lengthX = xToString.length;
    let int = parseInt(lengthX / 2);
    let remainder = lengthX % 2;
    let trueOrFalse = true;
    
    for(let i = 0; i < lengthX - int - remainder; i++) {
        trueOrFalse = xToString.charAt(lengthX - 1 - i) === xToString.charAt(i) 
        if(!trueOrFalse) break;
    }
    return trueOrFalse
    // end of leetcode solution
};

// supporting codes for the problem
const num = 12251;
console.log(isPalindrome(num));