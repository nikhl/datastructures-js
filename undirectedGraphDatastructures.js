// Node datatype for undirected Graphs
function Node(id, key)
{
	if(id==null) {
		throw new Error("Cannot create a Node without id");
	}
	else {
		this._id 	= id;
		this._key	= key || 0;
		this._edges = [];
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
	setEdges: function(edges)
	{
		for(var i=0; i<edges.length; i++)
		{
			this._edges.push(edges[i]);
		}
	},
	getEdges: function()
	{
		return this._edges;
	}
}

exports.Node = Node;

// Edge class
function Neighbor(node, cost) {
	if(node == null) {
		throw new Error("cannot create a Neighbor");
	}
	else {
		this._node = node;
	}
	this._cost = cost || 0;
}

Neighbor.prototype = {
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