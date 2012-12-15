var underJS = require('underscore');

// Stack Datastructure implementation in Javascript
function Stack() {
}

Stack = Array;
Stack.prototype.__defineGetter__('top', function(){
	return this.slice(this.length-1)[0];
});

exports.Stack = Stack;

// Queue Datastructure implementation in Javascript
function Queue()
{
	this._inbox = [];
	this._outbox = [];
	this._length = 0;
	this.enqueue.apply(this, arguments);
}

Queue.prototype = {
	enqueue: function enqueue(elements)
	{
		for(var i=0; i<arguments.length; i++)
		{
			this._inbox.push(arguments[i]);
		}
	},
	dequeue: function dequeue()
	{
		var _top = this.top;
		this._outbox.pop();	
		return _top;
	},
	_copy_inbox_to_outbox: function copy()
	{
		this._outbox = this._inbox.reverse();
		this._inbox = [];
	}
}

Queue.prototype.__defineGetter__('top', function (){
	if(this.length == 0)
	{
		throw new Error("The Queue is empty");
	}
	if(this._outbox.length == 0)
	{
		this._copy_inbox_to_outbox();	
	}
	return this._outbox.slice(-1)[0];
});

Queue.prototype.__defineGetter__('length', function (){
	return (this._inbox.length + this._outbox.length);
});

exports.Queue = Queue;

// Heap Datastructure
function Heap() {
	this._hash = new Object();
	this.insert.apply(this, arguments);
}

Heap.prototype = {
	insert: function(elements) {
		length = this.length;
		for(var i=length+1; i<=(length+arguments.length); i++) {
			this._hash[i] = arguments[i-length-1];
			this._heapifyUp(i);
		}
	},
	_heapifyUp: function(position) {
		if(position > 1) {
			var j = Math.floor(position/2);
			if(this._hash[position].getKey() < this._hash[j].getKey()) {
				var tmp 			 = this._hash[position];
				this._hash[position] = this._hash[j];
				this._hash[j]		 = tmp;
				this._heapifyUp(j);
			}
		}
	},
	_findMinimum: function() {
		if(this.length!=0) {
			return this._hash[1];	
		}
		else {
			//throw new Error("Heap is empty");
			return null;
		}
	},
	delete: function(position) {
		if(position < this.length) {
			var deletedElement   = this._hash[position];
			var lastElement      = this._hash[this.length];
			delete this._hash[this.length];
			this._hash[position] = lastElement;
			if(deletedElement.getKey() < lastElement.getKey()) {
				this._heapifyDown(position);
			}
			else {
				this._heapifyUp(position);
			}
		}
		else if(position == this.length){
			delete this._hash[position];
		}
		else {
			throw new Error("Index exceeds length of the array");
		}
	},
	_heapifyDown: function(position) {
		var length = this.length;
		if((2*position) > length) {
			return;
		}
		else if((2*position) < length){
			var leftChild  = this._hash[2*position];
			var rightChild = this._hash[(2*position)+1];
			if(leftChild<rightChild) {
				var j = 2*position;
			}
			else {
				var j = (2*position)+1;
			}
		}
		else {
			var j = 2*position;
		}
		if(this._hash[j].getKey() < this._hash[position].getKey()) {
			var temp 			 = this._hash[position];
			this._hash[position] = this._hash[j];
			this._hash[j] 		 = temp;
			this._heapifyDown(j);
		}
	},
	extractMinimum: function() {
		var minElement = this._findMinimum();
		if(minElement!=null) {
			this.delete(1);
		}
		return minElement;
	}
};

Heap.prototype.__defineGetter__('length', function() {
	return underJS.size(this._hash);
});

exports.Heap = Heap;