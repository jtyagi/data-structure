class Node {	
	constructor(data){
		this.data = data;
		this.next = null;
	}
}

class LinkList {
	constructor(){
	}
	
	addNodeAtEnd(data){
		// debugger;
		if(data == null ) { 
			console.log('invalid data') 
			return;
		};
		
		let newNode = new Node(data);
		
		let current = this.head;
		if(current){
			while(current.next){
				current = current.next;
				continue;
			}
			current.next = newNode;
			
		}else {
			this.head = newNode;
		}
		
	}
	addNodeAtPosition(position, data) {
		let current = this.head;
		let newNode = new Node(data);
		if(!current){
			this.head = newNode;
			return;
		}
		let size = 1;
		do {
			if(position <= 1 ){
				newNode.next = current;
				this.head = newNode;
				break;
			}else{
				if(size+1 === position){
					newNode.next = current.next;
					current.next = newNode;
					break;
					
				}
				current = current.next;
				size++;
			}	
		}
		while(current.next) 
		if(!current.next){
			current.next = newNode;
		}
	}
	
	addNodeAtStart(node) {
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
	
	linkList.addNodeAtEnd(counter);
}
linkList.addNodeAtPosition(1,5);
linkList.addNodeAtPosition(4,7);
linkList.addNodeAtPosition(30,5);
linkList.addNodeAtPosition(30,50);
linkList.addNodeAtPosition(0,50);
linkList.addNodeAtPosition(-1,60);
//for(let counter = 11; counter<= 20; counter++){
//	node1 = new Node(counter);
//	linkList.addNodeAtEND(node1);
//}
linkList.iterate();




console.log(JSON.stringify(linkList.head));
