//creating a HashTable

class HashTable{
    constructor(size=53){
        //this is the array that holds the data at
        //specific indices
        this.keyMap= new Array(size);
    }

    __hash(key){
        let total=0
        let primeNumber=3
        for(let i=0; i<Math.min(key.length,100); i++){
            let char=key[i];
            let value= char.charCodeAt(0)-96
            total= (total+primeNumber+value)% this.keyMap.length
        }

        return total;
    }

    //hash table
}