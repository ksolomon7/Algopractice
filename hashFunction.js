//hash function

//writing a function that deals with key, and arraylength
//max -hashes always deal with prime numbers because it helps with
//reducing collision-spreading data out so that it is faster to retrieve

function hash(key, arraylength){
    let total=0;
    let primeNumber=31

    for(let i=0;i<Math.min(arraylength, 100); i++){
       //pulling the individual character of the key
       //and converting each character to an alphabetic
       //ranking and adding the prime number and diving it by the array length to get a unique out
       //put of a fixed size

       let char=key[i];
       let value= char.charCodeAt(0) -96
       total= (total+value+primeNumber)%arraylength
    }
    return total
}

//if the key that is inputted has a large number or characters
//the Math.min will go through the first 100 characters and it will return
//an output of fixed size. This increases speed.
//array length has to be a prime number and also need to add a prime number
//in order to decrease collisions.