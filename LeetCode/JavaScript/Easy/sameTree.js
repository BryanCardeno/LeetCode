/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// LeetCode accepted. Solved using recursion.
var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if ((p == null && q) || (p && q == null)) return false;

  if (p.val !== q.val) return false;

  if (!isSameTree(p.left, q.left)) return false;

  return isSameTree(p.right, q.right);
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// supporting variables
const pParent = new TreeNode(1, null, null);

const pfirstLeft = new TreeNode(2, null, null);
const pfirstRight = new TreeNode(1, null, null);

pParent.left = pfirstLeft;
// pParent.right = pfirstRight;

const qParent = new TreeNode(1, null, null);
const qfirstLeft = new TreeNode(2, null, null);
const qfirstRight = new TreeNode(1, null, null);

// qParent.left = pfirstLeft;
qParent.right = pfirstRight;

const pGrandLeftOne = new TreeNode(4, null, null);
const pGrandLeftTwo = new TreeNode(5, null, null);

const pGrandRightOne = new TreeNode(6, null, null);
const pGrandRightTwo = new TreeNode(7, null, null);

// pfirstLeft.left = pGrandLeftOne;
// pfirstLeft.right = pGrandLeftTwo;

// pfirstRight.left = pGrandRightOne;
// pfirstRight.right = pGrandRightTwo;

const qGrandLeftOne = new TreeNode(4, null, null);
const qGrandLeftTwo = new TreeNode(5, null, null);

const qGrandRightOne = new TreeNode(6, null, null);
const qGrandRightTwo = new TreeNode(7, null, null);

// qfirstLeft.left = qGrandLeftOne;
// qfirstLeft.right = qGrandLeftTwo;

// qfirstRight.left = qGrandRightOne;
// qfirstRight.right = qGrandRightTwo;

console.log(isSameTree(pParent, qParent));
// console.log(!parent.left && "test");
