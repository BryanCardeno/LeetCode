/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*/

/**
 * @param {string} s
 * @return {number}
 */

// added solution to function
 const checkValue = value => {
    switch(value) {
            
        case "I":
            return 1;
            
        case "V":
            return 5;
            
        case "X":
            return 10;
            
        case "L":
            return 50;
            
        case "C":
            return 100;
            
        case "D":
            return 500;
            
        case "M":
            return 1000;
    }
}
// end of added code to solution

var romanToInt = function(s) {
    // solution
    console.log(s)
    let stringArray = s.split("");
    let total = 0;
    let currentValue = 0;
    let nextValue = 0;
    
    for (let i = 0; i < stringArray.length; i++) {
        currentValue = checkValue(stringArray[i])
        
        if(stringArray[i+1]) {
            nextValue = checkValue(stringArray[i+1]);
        }
        
        if(currentValue >= nextValue) {
            total += currentValue;
            nextValue = 0;
        }
        else {
            total += (nextValue - currentValue);
            nextValue = 0;
            i++;
        }
    }
    
    return total;
    // end of solution
};

// supporting code for the problem
console.log(romanToInt("IIV"))