function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
      current.next = new ListNode(val);
      current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(list) {
  let result = [];
  while (list !== null) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0); // Dummy node to start the result list
  let current = dummy; // Pointer to build the result list
  let carry = 0; // To handle carry in addition
    console.log({current, dummy})
  // Traverse both linked lists
  while (l1 !== null || l2 !== null || carry > 0) {
    let sum = carry; // Start with carry from previous iteration

    // Add value from l1 if it exists
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }

    // Add value from l2 if it exists
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }

    // Calculate the new carry and the digit to store in the current node
    carry = Math.floor(sum / 10); // Carry for next iteration
    let digit = sum % 10; // The digit to store

    // Create a new node for the current digit and move to the next node
    current.next = new ListNode(digit);
    current = current.next;
  }

  // Return the resulting linked list starting from dummy.next (skip the dummy node)
  return dummy.next;
};
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
addTwoNumbers(l1,l2);
