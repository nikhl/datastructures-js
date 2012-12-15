var ds 		= require('./datastructures.js');
var underJS = require('underscore');

// Returns boolean value whether source and target are connected using Breadth First Search
function BFS(source, target)
{
	var explored = [];
	var queue 	 = new ds.Queue();
	queue.enqueue(source);
	while(queue.length!=0)
	{
		var node = queue.dequeue();
		explored.push(node);
		if(node == target)
		{
			return true;
		}
		else
		{
			underJS.each(node.getOutgoingEdges(), function(edge) {
				if(underJS.indexOf(explored, edge.getHead()) == -1)
				{
					queue.enqueue(edge.getHead());
				}
			});
		}
	}
	return false;
}

exports.BFS = BFS;

// Returns boolean value whether source and target are connected using Depth First Search
function DFS(source, target)
{
	var explored = [];
	var stack 	 = new ds.Stack();
	stack.push(source);
	while(stack.length!=0)
	{
		var node = stack.pop();
		explored.push(node);
		if(node == target)
		{
			return true;
		}
		else
		{
			underJS.each(node.getOutgoingEdges(), function(edge) {
				if(underJS.indexOf(explored, edge.getHead()) == -1)
				{
					stack.push(edge.getHead());
				}
			});
		}
	}
	return false;
}

exports.DFS = DFS;

// Finding shortest pat using Dijkstras algorithm
function DijkstrasSP(source, target)
{
	var path = [],
		prev = new Object(),
		heap = new ds.Heap(),
		currentNode = source;
	while((currentNode != target)) {
		if(currentNode!=null) {
			underJS.each(currentNode.getOutgoingEdges(), function(edge) {
				if(underJS.has(prev, edge)) {
					edge.setKey(edge.getKey()+prev[edge].getKey());
				}
				heap.insert(edge);
			});
			currentEdge = heap.extractMinimum();
			if(currentEdge==null) {
				currentNode = null;
			}
			else {
				currentNode = currentEdge.getHead();
				underJS.each(currentNode.getOutgoingEdges(), function(edge) {
					prev[edge.getId()] = currentEdge;
				});
			}
		}
		else {
			console.log("There is no path between Node%d and Node%d", source.getId(), target.getId());
			return path;
		}
	}
	if(currentNode == target) {
		path.push(target);
		while(currentEdge!=null) {
			path.push(currentEdge.getTail());
			currentEdge = prev[currentEdge.getId()];
		}
	}
	return path.reverse();
}

exports.DijkstrasSP = DijkstrasSP;