class Stack {
    constructor() {
  
      // Initialize an empty stack
      this.items = [];
    }
  
    // Push a new item onto the stack
    push(item) {
      this.items.push(item);
    }
  
    // Remove and return the last item
    pop() {
  
      // If the stack is empty, return null
      // (It would also be reasonable to throw an exception)
      if (!this.items.length) {
        return null;
      }
      return this.items.pop();
    }
  
    // Returns the last item without removing it
    peek() {
      if (!this.items.length) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  }

  let MaxStack= new Stack()
  MaxStack.push(1)
  MaxStack.push(3)
  MaxStack.push(7)
  MaxStack.push(1)
  
  console.log(MaxStack.items)// []
  //returning the largest element in the stack


