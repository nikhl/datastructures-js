var assert = require('assert');
var ds 	   = require('./data_structures.js');
var stack  = new ds.Stack(2,7);

stack.push(5);
console.assert((stack.length == 3), "Stack.length not working as expected");
assert.equal(true, (stack.top == 5), "Stack.top not working correctly");
assert.equal(true, (stack.pop() == 5), "pop not working as expected");
assert.equal(true, (stack.pop() == 7), "pop not working as expected");
assert.equal(true, (stack.pop() == 2), "pop not working as expected");