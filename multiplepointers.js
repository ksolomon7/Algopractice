//write a function called sumZero which accepts a sorted
//array of integers. The function should find the first pair
//where the sum is 0. Return an array that includes both
//values that sum zero, or undefined if a pair does not exist.

//are there any edgecases that I need to consider. 
//sorted array of integers
//[-2,-1,0,1,2] // -2 and 2 return an array [-2,2]
// [1,2,3] // undefined

function sumZero(array){
    //for loop with i (referencing the index at the beginning of the array)
    //for loop with j(referencing start at the end of the array)
    //array[j]+ array[i] should give 0 
    //when the first pair is found I want to return the array [array[i], array[j]]
        //if there are no pairs // return undefined

    for(let i=0; i<array.length; i++){
        for (let j=i+1; j<array.length; j++){
            if(array[i]+array[j]===0){
                return [array[i], array[j]]
            }
        }
    }  
}

sumZero([-2,-1,0,1,2])
