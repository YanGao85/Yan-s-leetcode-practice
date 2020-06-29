/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  //variable carry = 0
  let carry = 0;
  let curr1 = l1;
  let curr2 = l2;
  let prev = null;
  //loop through l1 and l2. while both are true
  while (curr1 !== null && curr2 !== null) {
    const num = curr1.val + curr2.val + carry;
    if (num > 9) {
      curr1.val = num - 10;
      carry = 1;
    } else {
      curr1.val = num;
      carry = 0;
    }
    prev = curr1;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }

  if (curr2 !== null) {
    prev.next = curr2;
    curr1 = prev.next;
  }

  while (curr1 !== null) {
    const num = curr1.val + carry;
    if (num > 9) {
      curr1.val = num - 10;
      carry = 1;
    } else {
      curr1.val = num;
      carry = 0;
    }
    prev = curr1;
    curr1 = curr1.next;
  }
  if (carry) {
    prev.next = new ListNode(carry);
  }
  return l1;

  //if my carry is 0 or 1. If it is 1 I will add it to the sum.
  //if

  //add the remaining nodes plus a carry if there is one

  //return l1
};
