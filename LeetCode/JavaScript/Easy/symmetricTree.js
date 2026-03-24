/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

// TODO: find a way to do it <1 ms and <58MB memory space thru dynamic programming.
var isSymmetric = function (root) {
  let returnValue = true;

  const innerTraverse = (left, right) => {
    if (left == null && right == null) return;

    if ((left == null && right) || (left && right == null)) {
      returnValue = false;
      return;
    }

    if (!(left.val == right.val)) {
      returnValue = false;
      return;
    }

    innerTraverse(left.left, right.right);

    if (!returnValue) {
      return;
    }

    innerTraverse(left.right, right.left);
  };

  innerTraverse(root.left, root.right);
  return returnValue;
};

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const parent = new TreeNode(2);

const leftChild = new TreeNode(3);
const rightChild = new TreeNode(3);

const leftChildLeft = new TreeNode(4);
const leftChildRight = new TreeNode(5);

const rightChildRight = new TreeNode(4);

parent.left = leftChild;
parent.right = rightChild;

leftChild.left = leftChildLeft;
leftChild.right = leftChildRight;

rightChild.right = rightChildRight;

console.log(isSymmetric(parent));
