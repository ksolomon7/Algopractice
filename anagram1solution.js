// given two string, write a function to determine if second string
//is an anagram of the first.
//An anagram is a word or a phrase formed by rearranging the letters 
//of another such as cinema and iceman

//create a function to checkAnagram
//if the length of str1 and str2 are not the samme return false
//declare an empty obj and check the frequency for str1
//compare the frequency with str2- if it does not match return false
//if it does match return true

function checkAnagram (str1, str2){
    
    if (str1.length !== str2.length){
        return false
    }

    let counterObj={};

    for(let i=0; i<str1.length; i++){
        //ternary statement 
        let letter= str1[i]
        counterObj[letter]? counterObj[letter] +=1 : counterObj[letter] =1
    }

    console.log(counterObj)
    //compare using another for loop to check if the char in str2
    //are in the counterObj

    for(let i=0; i<str2.length; i++){
        let letter= str2[i]

        if (!(counterObj[letter])){
            // console.log("this is not true")
            return false
        }else{
            counterObj[letter] -= 1
        }
        
        // console.log("this is true")
        return true

    }
}

checkAnagram("iceman", "cinema")
// checkAnagram("iceman", "birman")