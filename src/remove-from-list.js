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
 
 function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
} 
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  };


    print() {
      let current = this;
      while(current) {
        console.log("Node: ", current.value);
        current = current.next;
        
        }
    }
};

function removeKFromList(l, k) {
  
     if (l != null){
    let last = 0;
    let head=l; //  указатель на начало списка
    let current = l; // указатель на текущий элемент в списке 
    let prev = null; // предыдущий элемент
    let num = 0; // текущий номер элемента в списке
    while (last === 0){
      /*head.print();*/
      /*console.log('current value', current.value);*/
      if (current.value === k){
        if (prev === null) { // первый элемент
          head = current.next;
          current = current.next; 
          
        }else { // не первый элемент
              if (current.next != null) // не первый элемент  и не последний 
              { 
                prev.next = current.next; 
                current=current.next;
              }
              else // последний элемент
              {
                  prev.next=null;  
                  last = 1;
              }
            
              }
    } else // не равен k 
      {
        
        prev = current;  
        current = current.next;  
        if (current === null) {last = 1;}
      }
    
  }
  
  return head;
}else {throw new TypeError('Array is Empty'); }
}

     module.exports = {
  removeKFromList
};


