// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Constraints:

// 0 <= x <= 2^31 - 1

var mySqrt = function (x) {
    let current = Math.floor(Math.random() * 46340); // square root of highest number available for the constraints;
    let min = 0;
    let minPlusOne = min + 1;
    let max = 46340;
    let result = current;

    if (max * max == x || x > max * max) {
        return max;
    }
    else {
        for (let i = 0; i < 31; i++) {
            if (x < (current * current)) {
                max = current;
            }
            else {
                min = current;
                minPlusOne = min + 1;
            }

            if (x >= (min * min) && x < (minPlusOne * minPlusOne)) {
                result = min;
                break;
            }
            current = Math.floor((min + max) / 2);
        }
    }

    return result;
}

console.assert(mySqrt(2147483647) === 46340, "Test 1");
console.assert(mySqrt(144) === 12, "Test 2");
console.assert(mySqrt(2, 147, 378, 222) === 46339, "Test 3");