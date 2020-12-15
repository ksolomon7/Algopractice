//class for Node
class Node{   
    constructor(val){
        this.val=val
        this.next=null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }

    push(val){
        let newNode= new Node(val)

        if(!this.head){
            //if the head does not exist then go ahead 
            //and set the newNode to the head and the 
            //tail points to the value of the tail
            this.head=newNode;
            this.tail=this.head;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++
        return this
    }
}

let list= new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
// console.log(list)