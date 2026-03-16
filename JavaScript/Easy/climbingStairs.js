/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:

1 <= n <= 45
*/

/**
 * @param {number} n
 * @return {number}
 */

// TODO: STILL NEED TO SOLVE

var climbStairs = function (n) {
  const steps = [0, 1]; // 1 and 2 steps
  const numSteps = [1, 2]; // 1 step and 2 different step

  const helperFunc = (step) => {
    let count = 0;
    // step = 5

    if (step == 0)
      // skip
      return 0;

    if (step == 1)
      // skip
      return 1;

    if (step == 2)
      // skip
      return 2;

    if (!steps[numSteps - 1]) count = helperFunc(step - 1);
    numSteps.push(Number(count + numSteps[step - 1]));

    return numSteps[step - 1];
  };

  helperFunc(n);

  console.log(numSteps[n - 1]);
};

console.log(climbStairs(4));
