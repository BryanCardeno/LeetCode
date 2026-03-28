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
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;

  const innerTraverse = (nd) => {
    if (nd == null) return 0;
    let leftCounter = 0;
    let rightCounter = 0;

    leftCounter = innerTraverse(nd.left);
    leftCounter++;

    rightCounter = innerTraverse(nd.right);
    rightCounter++;

    return leftCounter > rightCounter ? leftCounter : rightCounter;
  };

  let leftDepth = innerTraverse(root.left);
  let rightDepth = innerTraverse(root.right);

  return leftDepth > rightDepth ? ++leftDepth : ++rightDepth;
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const myTree = new TreeNode(0);

console.log(maxDepth(myTree));
