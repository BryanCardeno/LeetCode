/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
}

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(2);
const node4 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;


var deleteDuplicates = function (head) {
    if (head == null) return head;

    let currentNode = head;
    let nextNode = head.next;

    while (nextNode != null) {
        if (nextNode.val == currentNode.val) {
            nextNode = nextNode.next;
            currentNode.next = nextNode;
        }
        else {
            currentNode = nextNode;
            nextNode = currentNode.next;
        }

    }

    return head;

}

deleteDuplicates(node1);



