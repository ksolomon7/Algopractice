//implement a function called countUniqueValues
//which accepts a sorted array, and counts the unique
//values in the array. There can be negative numbers in 
//the array but they will be sorted


//[1,1,1,1,2]
//[1,2,3,4,5]

//comparing two values on both ends
//if the value at array[i] is the same as the array[j]then increment j
//if they are not then move them to the index at which they were called


function countUniqueValues(array){
    let i=0
    
    for(let j=1; j<array.length;j++){
        if(array[i]!==array[j]){
            i++
            array[i]=array[j]
        }
    }
    console.log(i+1)
    return i+1
}

//only returns the value of the unique characters
//changes the array but only give you the length of unique
//characters


countUniqueValues([1,1,1,1,2]) //return [1,2]
countUniqueValues([1,2,3,4,4])            