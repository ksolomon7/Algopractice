//write a function called same, which accepts two arrays
//the function should return true if every value in the array 
//has a corresponding value squared in the second array.
//The frequency of the values must be the same. 

//this is O(n) complexity

function same(arr1, arr2){
    //create two objects to count the frequency of indexes
    //check to see if the keys of obj1 **2 == obj2
    //check to see if the frequencies are the same

    let frequencyObj1={};
    let frequencyObj2={};

    //edge case

    if (arr1.length !== arr2){
        // console.log("this is wrong")
        return false
    }

    for(let val of arr1){
        frequencyObj1[val] = (frequencyObj1[val] || 0) + 1
    }

    for (let val of arr2){
        frequencyObj2[val]= (frequencyObj2[val] || 0) + 1
    }

    for (let key in frequencyObj1){
        //if the key squared is not in frequencyObj2 then return false
        // 2**2=4 is not a key in frequencyObj2 then return false

        if(!(key**2 in frequencyObj2)){
            return false
        }

        //if the frequency is not the same then return false
        // frequencyObj2[4] which gives the count is not the same as 
        //frequencyObj1[2] then return false 
        if(frequencyObj2[key**2] !== frequencyObj1[key]){
            return false
        }
    }
     return true
    // console.log(frequencyObj1)
    // console.log(frequencyObj2)
}

// same([1,2,3,4], [4,9,16,1])
// same([1,2,3,2], [4,4,9,1])
same([1,2,3], [4,9,1,16])
