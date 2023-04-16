const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeElements(l, k) {
  // Handle the case where the list is empty.
    
  if (!l) {
    return null;
  }
  
  // Remove all leading elements with value k.
  while (l && l.value === k) {
    l = l.next;
  }
  
  // Handle the case where the list is now empty.
  if (!l) {
    return null;
  }
  
  // Remove all remaining elements with value k.
  let prev = l;
  let curr = l.next;
  while (curr) {
    if (curr.value === k) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  
  return l;
}

// Create the linked list from the array.
const l = new ListNode(3);
let curr = l;
[1, 2, 3, 4, 5].forEach((val) => {
  curr.next = new ListNode(val);
  curr = curr.next;
});

// Call the removeElements function on the linked list.
const result = removeElements(l, 3);

// Print the result.
let str = "";
let node = result;
while (node) {
  str += node.value + " ";
  node = node.next;
}
console.log(str.trim());


