class Node {
	
	constructor(data){
		this.data = data;
		this.next = null;
	}

}

class LinkList {
	constructor(){
	}
	
	addNodeAtStart(node){
		debugger;
		if(!node || !node.data || !node.next !== null) return console.log('invalid data');
		let current = this.head;
		if(current){
			while(current.next){
				current = current.next;
				continue;
			}
			current.next = node;
			
		}else {
			this.head = node;
		}
		
	}
	addNodeAfterPosition(position, node) {
		let current = this.head;
		if(!current){
			this.head = node;
		}
		if(this.head position === 0){
			node.next = current;
			this.head = node;
		}
		let listLength = 0;
		while(current.next) {
			listLength++;
			
		}
	}
	
	addNodeAtEND(node) {
		let current = this.head;
		while(current.next) {
			current = current.next;
		}
		if(!current.next) {
			current.next = node;
		}
	}
	iterate(list){
		let current = this.head;
		while(current.next){
			console.log(current.data);
			current = current.next;
		}
		if(!current.next){
			console.log(current.data);
		}
	}
}

linkList = new LinkList();

for(let counter = 0; counter<= 10; counter++){
	node1 = new Node(counter);
	linkList.addNodeAtStart(node1);
}
for(let counter = 11; counter<= 20; counter++){
	node1 = new Node(counter);
	linkList.addNodeAtEND(node1);
}
linkList.iterate();




console.log(JSON.stringify(linkList.head));
