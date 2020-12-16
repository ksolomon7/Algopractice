//write a function called maxSubArraySum which
//accepts an array of integers and a number called n. 
//function should calculate the maximum sum of consecutive
//elements

function maxSubarraySum(arr,num){
    //The loop for i< arr.length-num+1
    let max=null
    //the max available for i, should be 
    //arr.length-num+1//which for right now is 4
    if(num>arr.length) return undefined

    for(let i=0; i<arr.length-num+1; i++){
        let temp=0
        for(let j=0; j<num; j++){
            temp+= arr[i+j]
            if (temp>max){
                max=temp
            }
        }
    }
    return max
}





let sum=maxSubarraySum([1],2)
console.log(sum)
// maxSubarraySum([1,2,5,2,8,1,5],4)
// maxSubarraySum([1,2,5,2,8,1,5],2)