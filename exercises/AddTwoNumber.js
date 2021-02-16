function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function(list1, list2) {
    var l1 = list1;
    var l2 = list2;
    
    var result = new ListNode(0, null);
    t1 = result;
    var carry = 0;

    while(l1 != null || l2 != undefined) {
        var value =  (l1?.val ?? 0)+ (l2?.val ?? 0) + carry;

        if(value > 9) {
            value -= 10;
            carry = 1 ;
        } else {
            carry = 0;
        }
        t1.next = new ListNode(value, null);
        t1 = t1.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }

    if(carry === 1) {
        t1.next = new ListNode(1, null);
    }

    return result.next;
};

var l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)));
var l2 = new ListNode(5, new ListNode(6, new ListNode(7, null)));

addTwoNumbers(l1,l2);
//var something = null;
//console.log((something?.value ?? 0) + 1);

