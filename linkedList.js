class LinkedListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  const a = new LinkedListNode('A');
  const b = new LinkedListNode('B');
  const c = new LinkedListNode('C');
  const d= new LinkedListNode('D')

  a.next = b;
  b.next = c;
  c.next=d;
  
  //the way we would delete a node is by having the 
  //previous node point to the node after the referred
  //node

  function deleteNode(deletedNode){
  
    let nextNode=deletedNode.next

    if(nextNode){
       deletedNode.value=nextNode.value;
       deletedNode.next= nextNode.next
    }
    else{
        throw new Error("Can't work with this")
    }
  }
  
  
  deleteNode(b);
  deleteNode(b)
  
  
  //a-b-c-d
  //a-c-d