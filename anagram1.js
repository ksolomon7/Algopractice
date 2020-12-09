// given two string, write a function to determine if second string
//is an anagram of the first.
//An anagram is a word or a phrase formed by rearranging the letters 
//of another such as cinema and iceman

//create a function, that takes in two strings as an argument and 
//return true if the frequency of the letters are the same, and return
//false if the string don't match

// function name -checkAnagram
//checkAnagram("iceman", "cinema") //true
//checkAnagram("Iceman", "cinema") //true (do uppercase letters matter)
//checkAnagram("I love you", "you love i") //check the length of 
//the phrase at the beginning return false
//checkAnagrams that are alphanumeric, and also should i consider spaces or if the input
// is wrong for example if the input is incorrect
//charAt() but my implementation with use loops which will be a O(n) time complexity

function checkAnagram(str1,str2){
    //declare two objects to hold the individual string
    //check to see if the length of the strings are the same 
    //for in loop 
        //if the keys in obj1 are not the same as the keys in obj2-return false
        //if the values of the keys are not the same in both objs-return false
    //return true

    let counterObj1={};
    let counterObj2={};

    if(str1.length !== str2.length){
        return false
    }

    //lowercase
    str1= str1.toLowerCase()
    str2= str2.toLowerCase()

    for(let val of str1){
        //console.log(val)
        counterObj1[val]= (counterObj1[val] || 0) +1
    }

    for (let val of str2){
        counterObj2[val] = (counterObj2[val] || 0) +1
    }
    
    // console.log(counterObj1)
    // console.log(counterObj2)
 
    for(let key in counterObj1){
        
        if(!(key in counterObj2)){
            //if the key is not in counterObj2
            console.log("this is not true")
            return false
        }

        if(counterObj1[key] !== counterObj2[key]){
            // console.log("this is not true")
            return false
        }
    }
    
    // console.log("this is true")
    return true
}

// checkAnagram("iceman", "cinema")
// checkAnagram("iceman", "birman")
// checkAnagram("I am here", "here am I")
checkAnagram("", "")