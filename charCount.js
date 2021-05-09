//create a function that takes in a string
//and return the count of the characters-alphanumeric

//input=> str="hello"=>{h:1, e:1, l:2, o:1}
//input=> str="My phone number is 111134"=> clarifying question are we converting the string to lowercase 
//before we are counting or should I consider uppercase letters
//Do I also consider the spaces as characters?
//=>return will be {m:2,y:1, p:1, h:1, o:1, n:2, e:2, u:1, b:1, r:1, i:1, s:1, 1:4, 3:1, 4:1}
function charCount(str){
    //create an object that will log the count of alphanumeric characters in the string
    //lowercase the string
    //loop through the string and see if the key exists
      //if it does increment the value
      //if it does not create a new key and set the value to one
    //return the object

    let characters={};
    let newStr= str.toLowerCase().replace(/ /g, "");
    // console.log(newStr)
    
    for(let i=0; i<newStr.length; i++){

        if(!characters[newStr[i]]){
            characters[newStr[i]]=1;
        }else{
            characters[newStr[i]]+=1
        }
    }

    // console.log(characters)
    return characters
   
}

charCount("hello")
charCount("My phone number is 111134")//example 2