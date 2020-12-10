//Implement a function called countUniqueValues,
//which accepts a sorted array, and counts the
//unique values in the array. There can be negative
//numbers in the array, but it will always be sorted.

//[-4,-3,-2,-1,0,1,2,3,4]=>{-4:1,-3:1,-2:1}
//[1,1,1,1,4]
//should i convert floats into integer?
//are there any edge cases I should take into consideration?

function countUniqueValues(arr){
    let left=0;
    let right=left+1;

    while(left<right){
    if(arr[left]===arr[right]){
        //removing items splice(index, how many)
        arr.splice(right, 1)
    }else{
        left++ 
    }
}
   return arr.length
}

// countUniqueValues([1,1,1,1,4])
countUniqueValues([-4,-3,-2,-1,0,1,2,3,4])
countUniqueValues([2,2,2,2,2,2,2,2,2,2])

//Note this is for frequency, not count
//set up two variables, left=0, and right=left+1
    //create an object that counts the frequencies
    //while right<arr.length
    //if statement !(countObj[arr[left]] && arr[Left]!== arr[right]) countObj
    //else count[obj] ++
    //else increment right++
    //if arr[right] and arr[left] are the same and then countObj[arr[left]] exists then I need to 
    //increment the left side and also increment the count[obj]