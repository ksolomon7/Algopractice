//Implement a function called countUniqueValues,
//which accepts a sorted array, and counts the
//unique values in the array. There can be negative
//numbers in the array, but it will always be sorted.

//always look at the possibility of array being
//empty

function countUniqueValues(arr){
    //edgecase for when the array is empty
    //set the value of i
    //get j in a for loop and then set i to j when they are the same
    //j loops anyways but the value of i should change
    //return the count of the array
    if (arr.length===0) return 0
    let i=0
    for(j=1; j<arr.length; j++){
        if (arr[i]!==arr[j]){
            i++
            arr[i]=arr[j]
        }
    }
    
    console.log(i)
    return i
}

//[4,5,6,7]
// countUniqueValues([1,1,1,1,1])
countUniqueValues([2,3,4,5,6,2,7])
//big 0 notation- O(n) because we are looping through the 
//array once
