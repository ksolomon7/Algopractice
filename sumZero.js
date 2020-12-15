//create a function that check to see if the sum is 
//0
//double pointers practice

function sumZero(array){
    let left=0
    let right=array.length-1

    while(left<right){
        let sum=array[left]+array[right]
        if(sum===0){
            console.log([array[left], array[right]])
            return [array[left], array[right]]
        }else if(sum>0){
            right--
        }else{
            left++
        }
    }
}

sumZero([-4,-3,-2,-1,0,1,2,3,4,10])