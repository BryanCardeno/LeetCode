/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 var searchInsert = function(nums, target) {
    // solution below
    if(target < nums[0]) return 0;
    for(let i = 0; i < nums.length; i++ ) {
        if(nums[i] == target)    {
            return i;
        }
        
        if(target > nums[i] && target < nums[i+1]) {
            return ++i
        }
    }
    return nums.length;
    // end of solution
};

// supporting code for the problem
console.log(searchInsert([1,2,3,4,5,6,7,8,9], 5));