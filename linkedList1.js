class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

function containCycle(linkedNode){
  
    let fastNode=linkedNode;
    let slowNode=linkedNode;

  
    while(fastNode && fastNode.next){
        slowNode=slowNode.next
        fastNode=fastNode.next.next
      
        if(fastNode === slowNode){
            console.log("this is true")
            return true
        }
        
    }
    console.log("this is false")
     return false
   
}

const a = new LinkedListNode('A');
const b = new LinkedListNode('B');
const c = new LinkedListNode('C');
const d = new LinkedListNode('D')
const e = new LinkedListNode('E')
a.next=b
b.next=c
c.next=d
d.next=e


containCycle(a)