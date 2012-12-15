var ds = require('./data_structures.js');

var queue = new ds.Queue(2,3,4,5,6);

console.log("Dequeued element is %d", queue.dequeue());

queue.enqueue(7,8);

console.log("Dequeued element is %d", queue.dequeue());
console.log("Top element is %d", queue.top);
console.log("Queue length is %d", queue.length);