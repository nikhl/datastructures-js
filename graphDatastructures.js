// Node datatype for undirected Graphs
function Node(id, key)
{
	if(id==null) {
		throw new Error("Cannot create a Node without id");
	}
	else {
		this._id 			= id;
		this._key			= key || 0;
		this._outgoingEdges = [];
		this._incomingEdges = [];
	}
}

Node.prototype = {
	setId: function(id)
	{
		this._id = id;
	},
	getId: function()
	{
		return this._id;
	},
	setKey: function(key)
	{
		this._key = key;
	},
	getKey: function()
	{
		return this._key;
	},
	setOutgoingEdges: function(edges)
	{
		for(var i=0; i<edges.length; i++)
		{
			this._outgoingEdges.push(edges[i]);
		}
	},
	getOutgoingEdges: function()
	{
		return this._outgoingEdges;
	},
	setIncomingEdges: function(edges)
	{
		for(var i=0; i<edges.length; i++)
		{
			this._incomingEdges.push(edges[i]);
		}
	},
	getIncomingEdges: function()
	{
		return this._incomingEdges;
	}
}

exports.Node = Node;

// Edge class
function Edge(id, head, tail, weight) {
	if((id == null) || (head==null) || (tail==null)) {
		throw new Error("cannot form an edge");
	}
	else {
		this._id   = id;
		this._head = head;
		this._tail = tail;
		this._weight = weight || 0;
	}
}

Edge.prototype = {
	getId: function() {
		return this._id;
	},
	setKey: function(id) {
		this._id = id;
	},
	getHead: function() {
		return this._head;
	},
	getTail: function() {
		return this._tail;
	},
	getKey: function() {
		return this._weight;
	},
	setKey: function(key) {
		this._weight = key;
	}
};

Edge.prototype.__defineGetter__('weight', function() {
	return this._weight;
});

exports.Edge = Edge;

// Graph Datastructure
function Graph() {
	var _nodes = [];
}

Graph.prototype = {
	getNodes: function() {
		return this._nodes;
	}
}

exports.Graph = Graph;