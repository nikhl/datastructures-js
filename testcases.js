var assert  = require('assert');
var ds 	    = require('./datastructures.js');
var graphDS = require('./graphDatastructures.js');
var search  = require('./search.js');
var underJS = require('underscore');
var utils   = require('./utils.js');

// Testcases for Stack datastructure
var stack  = new ds.Stack(2,7);

//Testcase for checking the functionality of Stack.push()
stack.push(5);
assert.equal(true, (stack.length == 3), "Stack.push() not working as expected");

//Testcase for checking the functionality of Stack.length
assert.equal(true, (stack.length == 3), "Stack.length not working as expected");

//Testcase for checking the functionality of Stack.top property
assert.equal(true, (stack.top == 5),    "Stack.top not working correctly");

//Testcases for checking the functionality of Stack.pop()
assert.equal(true, (stack.pop() == 5),  "Stack.pop() not working as expected");
assert.equal(true, (stack.pop() == 7),  "Stack.pop() not working as expected");
assert.equal(true, (stack.pop() == 2),  "Stack.pop() not working as expected");

// Testcases for Queue datastructure
var queue  = new ds.Queue(2,3,4,5,6);

//Testcase for checking the functionality of Queue.dequeue()
assert.equal(true, (queue.dequeue() == 2), "Queue.dequeue() not working properly");
assert.equal(true, (queue.dequeue() == 3), "dequeue not working properly");

//Testcase for checking the functionality of Queue.length
assert.equal(true, (queue.length == 3), "Queue.length not working properly");

//Testcase for checking the functionality of Queue.enqueue()
queue.enqueue(7,8);
assert.equal(true, (queue.length == 5), "Queue.length not working properly");

//Testcase for checking the functionality of Queue.top
assert.equal(true, (queue.top == 4), "Queue.top not working properly");

//Testcase for checking the creation of Node
assert.throws(function() {
		new graphDS.Node();
	},
	Error, "Creation of Node not working as expected");

//Testcase for checking the creation of Node
assert.throws(function() {
		new graphDS.Edge();
	},
	Error, "Creation of Edge not working as expected");

// For non weighted graph, creating Nodes
var node1 = new graphDS.Node(1, 6);
var node2 = new graphDS.Node(2, 5);
var node3 = new graphDS.Node(3, 4);
var node4 = new graphDS.Node(4, 3);
var node5 = new graphDS.Node(5, 2);
var node6 = new graphDS.Node(6, 1);

// For non weighted graph, creating Edges
var edge1 = new graphDS.Edge(1, node2, node1);
var edge2 = new graphDS.Edge(2, node3, node1);
var edge3 = new graphDS.Edge(3, node4, node1);
var edge4 = new graphDS.Edge(4, node5, node2);
var edge5 = new graphDS.Edge(5, node5, node3);
var edge6 = new graphDS.Edge(6, node5, node4);

// For non weighted graph, Associating edges to nodes
node1.setOutgoingEdges([edge1, edge2, edge3]);
node2.setOutgoingEdges([edge4]);
node3.setOutgoingEdges([edge5]);
node4.setOutgoingEdges([edge6]);
node5.setIncomingEdges([edge4, edge5, edge6]);

// Testcase for checking BFS if two nodes are connected
assert.equal(true, search.BFS(node1, node5), "Breadth First Search not working properly");

// Testcase for checking BFS if two nodes are not connected
assert.equal(true, !(search.BFS(node1, node6)), "Breadth First Search not working properly");

// Testcase for checking DFS if two nodes are connected
assert.equal(true, search.DFS(node1, node5), "Depth First Search not working properly");

// Testcase for checking DFS if two nodes are not connected
assert.equal(true, !(search.DFS(node1, node6)), "Depth First Search not working properly");

// Testcases for Heap datastructure
var heap = new ds.Heap();

//Testcase for checking the functionality of Heap.findMinimum()
assert.throws(function() {
		heap.findMinimum()
	},
	Error, "Heap.findMinimum() not working as expected");

//Testcase for checking the functionality of Heap.length
assert.equal(true, (heap.length == 0), "Heap.length not working as expected");

//Testcase for checking the functionality of Heap.insert()
heap.insert(node1);
heap.insert(node2, node3, node4);
assert.equal(true, (heap.length == 4), "Heap.length not working as expected");

//Testcase for checking the functionality of Heap.findMinimum()
assert.equal(true, (heap._findMinimum() == node4), "Heap.findMinimum() not working as expected");

//Testcase for checking the functionality of Heap.delete()
assert.throws(function() {
		heap.delete(30)
	},
	Error, "Heap.delete() not working as expected");
heap.delete(1);
assert.equal(true, (heap.length == 3), "Heap.delete() not working as expected");
heap.insert(node5);
assert.equal(true, (heap._findMinimum() == node5), "Heap.delete() not working as expected");

//Testcase for checking the functionality of Heap.extractMinimum()
assert.equal(true, (heap.extractMinimum() == node5), "Heap.extractMinimum() not working as expected");
assert.equal(true, (heap.length == 3), "Heap.extractMinimum() not working as expected");

var heap1 = new ds.Heap();
var n1 	  = new graphDS.Node(1,1);
var n2 	  = new graphDS.Node(1,2);
var n3 	  = new graphDS.Node(1,3);
var n4 	  = new graphDS.Node(1,4);
heap1.insert(n1, n2, n3);
assert.equal(true, (heap1.extractMinimum() == n1), "Heap.extractMinimum() not working as expected");
heap1.insert(n4);
assert.equal(true, (heap1.extractMinimum() == n2), "Heap.extractMinimum() not working as expected");

var heap2 = new ds.Heap();
assert.equal(true, (heap2.extractMinimum() == null), "Heap.extractMinimum() not working as expected");

var heap3 = new ds.Heap();
var node1 = new graphDS.Node(1);
heap3.insert(node1);
assert.equal(true, (heap3.extractMinimum() == node1), "Heap.extractMinimum() not working as expected");
assert.equal(true, (heap3.length == 0), "Heap.extractMinimum() not working as expected");

// ----------->
// For weighted graph, creating Nodes
var node1 = new graphDS.Node(1);
var node2 = new graphDS.Node(2);
var node3 = new graphDS.Node(3);
var node4 = new graphDS.Node(4);
var node5 = new graphDS.Node(5);
var node6 = new graphDS.Node(6);

// For weighted graph, creating Edges
var edge1 = new graphDS.Edge(1, node2, node1, 1);
var edge2 = new graphDS.Edge(2, node3, node1, 2);
var edge3 = new graphDS.Edge(3, node4, node1, 3);
var edge4 = new graphDS.Edge(4, node5, node2, 4);
var edge5 = new graphDS.Edge(5, node5, node3, 5);
var edge6 = new graphDS.Edge(6, node5, node4, 6);

// For weighted graph, Associating edges to nodes
node1.setOutgoingEdges([edge1, edge2, edge3]);
node2.setOutgoingEdges([edge4]);
node3.setOutgoingEdges([edge5]);
node4.setOutgoingEdges([edge6]);
node5.setIncomingEdges([edge4, edge5, edge6]);

// Testcase for checking shortest path using Dijkstras algorithm
var dijkstrasPath = search.DijkstrasSP(node1, node5);
var correctPath   = new Array(node1, node2, node5);
assert.equal(true, utils.compareArrays(correctPath, dijkstrasPath), "search.DijkstrasSP() not working as expected");

// ----------->
// For weighted graph, creating Nodes
var node1 = new graphDS.Node(1);

// Testcase for checking shortest path using Dijkstras algorithm
var dijkstrasPath = search.DijkstrasSP(node1, node1);
var correctPath   = new Array(node1);
assert.equal(true, utils.compareArrays(correctPath, dijkstrasPath), "search.DijkstrasSP() not working as expected");

// ----------->
// For weighted graph, creating Nodes
var node1 = new graphDS.Node(1);
var node2 = new graphDS.Node(2);
var node3 = new graphDS.Node(3);
var node4 = new graphDS.Node(4);

// For weighted graph, creating Edges
var edge1 = new graphDS.Edge(1, node2, node1, 1);
var edge2 = new graphDS.Edge(2, node3, node2, 1);
var edge3 = new graphDS.Edge(3, node4, node3, 7);
var edge4 = new graphDS.Edge(4, node4, node1, 5);

// For weighted graph, Associating edges to nodes
node1.setOutgoingEdges([edge1, edge4]);
node2.setOutgoingEdges([edge2]);
node3.setOutgoingEdges([edge3]);

// Testcase for checking shortest path using Dijkstras algorithm when there is a cycle in the graph
var dijkstrasPath = search.DijkstrasSP(node1, node4);
var correctPath   = new Array(node1, node4);
assert.equal(true, utils.compareArrays(correctPath, dijkstrasPath), "search.DijkstrasSP() not working as expected");

// -----------> Dijkstras Shortest path when there is no path between source and target
// For weighted graph, creating Nodes
var node1 = new graphDS.Node(1);
var node2 = new graphDS.Node(2);
var node3 = new graphDS.Node(3);

// For weighted graph, creating Edges
var edge1 = new graphDS.Edge(1, node2, node1, 1);

// For weighted graph, Associating edges to nodes
node1.setOutgoingEdges([edge1]);

// Testcase for checking shortest path using Dijkstras algorithm when there is no path between two nodes
var dijkstrasPath = search.DijkstrasSP(node1, node3);
var correctPath   = new Array();
assert.equal(true, utils.compareArrays(correctPath, dijkstrasPath), "search.DijkstrasSP() not working as expected");