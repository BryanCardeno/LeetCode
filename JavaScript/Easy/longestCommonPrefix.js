/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */

 var longestCommonPrefix = function(strs) {
    // solution below
    let paramArrayLength = strs.length;
    let commonPrefix = strs[0].charAt(0);
    let status = false;
    let currentIndex = 0;

    if(paramArrayLength === 1) {
        commonPrefix = strs[0];
    }
    else {


        do {
            for (let i = 1; i < paramArrayLength; i++) {
                if(strs[0].charAt(currentIndex) === strs[i].charAt(currentIndex)) {

                    status = true;
                }
                else {
                    if(currentIndex === 0) {
                        commonPrefix = "";
                    }

                    status = false;
                    break;
                }

            }
            commonPrefix = strs[0].substring(0, currentIndex++);
            if(currentIndex === strs[0].length && status) {
                commonPrefix = strs[0];
            }
        }
        while(status && currentIndex < strs[0].length)
    }
    return commonPrefix;
    // end of solution
};

// supporting code for the problem
const arrayString = ['ambot', 'a', 'amight'];
console.log(longestCommonPrefix(arrayString));