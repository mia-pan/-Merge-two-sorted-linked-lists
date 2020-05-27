// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// (input)
// a: 1->3->5 
//    ^ 
// b: 2->3->6
//    ^  

// (output) c: 1->1->2->3->4->4

// -> O(n) where n = a+b.length
// constant time = it's the same no matter how many "nodes" you have

var mergeTwoLists = function(a, b) { 
    let c = new ListNode()
    let current = c
    while (a && b) {
        if (l1.val <= l2.val) {
            curr.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            curr.next = new ListNode(l2.val)
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1 ? l1 : l2
    return ans.next
};

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = ['one', 'two', 'three'];
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"


/////soluton 1 ////////
var mergeTwoLists = function(l1, l2) {
    let ans = curr = new ListNode(null)
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            curr.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            curr.next = new ListNode(l2.val)
            l2 = l2.next
        }
        curr = curr.next
    }
    curr.next = l1 ? l1 : l2
    return ans.next
};



/////solution 2 //////
var mergeTwoLists = function(a, b) {
    let x = y = new ListNode(0)
    while (a && b) {
        if (a.val < b.val) {
            y.next = a, a = a.next
        } else {
            y.next = b, b = b.next
        }
        y = y.next
    }
    y.next = a || b
    return x.next
};

//////solution 3 ////////

const mergeTwoLists = (a, b) => {
    let x = y = new ListNode(0)
    while (a && b) {
        a.val<b.val ? [y.next,a]=[a,a.next] : [y.next,b]=[b,b.next]
        y = y.next
    }
    y.next = a || b
    return x.next
};

//////solution 4 //////
const mergeTwoLists=(a,b)=>{
    let x=y=new ListNode(0)
    while (a&&b) a.val<b.val?[y,y.next]=[y.next,a]=[a,a.next]:[y,y.next]=[y.next,b]=[b,b.next]
    y.next=a||b
    return x.next
  };
  ///////solution 5/////

  const mergeTwoLists=(a,b)=>{
    if (!a||!b) return a||b
    if (a.val>b.val) [a,b]=[b,a]
    a.next=mergeTwoLists(a.next,b)
    return a
};