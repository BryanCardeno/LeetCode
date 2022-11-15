/*
Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.

You can return the answer in any order.
*/

/*
Costraints:
    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.
*/

var twoSum = function (nums, target) {
    // leetcode solution below
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    // end of leetcode solution
}

// supporting codes for the problem
const numArray = [2,7,11,15];
const target = 17;

const returnedArray = twoSum(numArray, target);
console.log(returnedArray);