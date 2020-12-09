//write a function called same, which accepts two arrays
//the function should return true if every value in the array 
//has a corresponding value squared in the second array.
//The frequency of the values must be the same. 


// example: array1=[1,2,3,4] and array2=[4,9,16,1] => frequencyObj1={1:1, 2:1, 3:1, 4:1}//return true
// example2: array1=[1,2,3,4] and array2=[4,9,16,1,5] // return false or should I return null/undefined
// example3: array1=[1,2,3,4] and array2=[4,9,16,a] //input is wrong return null/undefined

function same(arr1,arr2){
  //first i would check if the length of the arrays are the same
  //create object 1 that holds the frequency for arr1
  //create object 2 that holds the frequency for arr2
  //check to see if the frequency are the same-how often the number is repeated
  //for in loop to check the keys against the second keys 
  //check to see if the values of the keys in the first object *2 equals the keys of the objects in the second
    //if this is true, return true //otherwise return false

  let frequencyObj1={};
  let frequencyObj2={};
  if (arr1.length === arr2.length){

    //first one to create an object1(refactor-condtional one one line using an
    //or statement)
    for (let i=0; i<arr1.length; i++){
        if (frequencyObj1[arr1[i]]){
            frequencyObj1[arr1[i]]+= 1
        }else{
            frequencyObj1[arr1[i]] = 1
        }
    }
    // console.log(frequencyObj1)

    for (let i=0; i<arr2.length; i++){
        if (frequencyObj2[arr2[i]]){
            frequencyObj2[arr2[i]]+= 1
        }else{
            frequencyObj2[arr2[i]] = 1
        }
    }


    // console.log(valuesOfFrequencyObj2)   

    //check the frequency
    for(let key in frequencyObj1){
        if(!(key**2 in frequencyObj2)){
            console.log("this is false, line 49")
            return false
            //if the key squared is not a key in frequencyObj2 then return false
        }

        if(frequencyObj2[key**2]!== frequencyObj1[key]){
            //if the values are not the same then return false
            console.log("this is false, line 56")
            return false
        }
    }

    //comparing keys to the first one being squared
    let keysofFrequencyObj1=Object.keys(frequencyObj1);
    let keysofFrequencyObj2= Object.keys(frequencyObj2);
  
    
    for(let i=0; i<keysofFrequencyObj1.length; i++){
        if(keysofFrequencyObj1[i]**2 == keysofFrequencyObj2[i]){
            return true
        }else {
            return false
        }
    }
  }else{
      return console.log("Length is incorrect")
  }
}

// same([1,2,3,4],[4,9,16,1])
// same([1,2,3,2], [1,9,4,25])
// same([1,2,3,4], [4,9,1])


