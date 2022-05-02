const { NotImplementedError } = require('../extensions/index.js');
/*const { assert } = require('chai');*/
const { ListNode } = require('../extensions/list-node.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 
class Queue {
  constructor() {
    this.listNode = new ListNode(null); 
  }
  getUnderlyingList() {
    return this.listNode;
  }

  enqueue(value) {
    let newList;
    if (this.listNode.value === null) {
      /*console.log('First element');*/
      this.listNode.value = value;
    } else {
      /*console.log('New element');*/
      let current = this.listNode;   
      let prev;   
      while (current) {
        prev = current;
        current = current.next;

      };

        prev.next = new ListNode(value);
        
    };


  }

  dequeue() {
    if (this.listNode){
    let element = this.listNode.value;
    this.listNode = this.listNode.next;
    return element;
    }
  }
}

module.exports = {
  Queue
};

/*const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);*/
/*console.log('Dequeue:',queue.dequeue());
console.log('Dequeue:',queue.dequeue());
console.log('Dequeue:',queue.dequeue());

console.log(queue);*/
/*assert.strictEqual(queue.dequeue(), 5);
assert.strictEqual(queue.dequeue(), 6);*/