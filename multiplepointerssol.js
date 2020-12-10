//write a function called sumZero which accepts a sorted
//array of integers. The function should find the first pair
//where the sum is 0. Return an array that includes both
//values that sum zero, or undefined if a pair does not exist.

//multiple pointers pattern-fewer operations

function sumZero(arr){
    let left=0
//in order to get the final index of the array, we need to do arr.length-1
    let right= arr.length-1

//as long as the left is less than the right amount then we are able to check all of the items
//in the array if we did <= then it would look at the same value of an index (4-4=0) and it would give
//a false positive
    while(left<right){
        let sum=arr[left]+arr[right]
        if(sum===0){
            return [arr[left], arr[right]]
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,10])

//it only works for a sorted array because it does the mathematical computation