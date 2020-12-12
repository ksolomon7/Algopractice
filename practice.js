//First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

// So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

// The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
// The values are the price (in US dollars) of one share of Apple stock at that time.
// So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

// Write an efficient function that takes stockPrices and returns the best profit I could have made
// from one purchase and one sale of one share of Apple stock yesterday.

//const stockPrices=[]
//  const stockPrices = [10, 7, 5, 8, 11, 9];

//getMaxProfit(stockPrices)
//No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same
//time step—at least 1 minute has to pass.

//need to buy before sell 
//I can not buy and sell on the same day which means that I can not subtract from the same index

//function takes an array which represent a collection of stock prices with indices representing time
//should find the difference between the highest number and the lowest number of stock prices
//buy at low and sell at high so i need to have an array returned with the lowest number first and 
//the highest number second in that order. declare a variable with highest profit array[0]+array[1]

//[10,7,5,8,11,9] if 10>7//true then i need 7 to be the first index
// first run I can do a loop that check for the min value and set its
// declare a variable that saves the index number for the min number
// another loop that start index number for the min number and this time the check
//is if the next number are higher

//edge case -if the number is a negative then we need to add a check before it is added

function getMaxProfit(stockPrices){
    let i=0;
    let minNum=0
    for(let j=1; j<stockPrices.length; j++){
        if(stockPrices[i]>stockPrices[j]){
            minNum=stockPrices[j]
            i++
        }else{
            minNum=stockPrices[i]
        }
    }

    let indexVal= stockPrices.indexOf(minNum)
    let maxNum=0
    for(let j=indexVal+1; j<stockPrices.length; j++){
        if(stockPrices[indexVal]<stockPrices[j]){
            maxNum=stockPrices[j]
            indexVal++
        }else{
            maxNum=stockPrices[indexVal]
        }
    }


    let finalProfit=maxNum-minNum
    
    return finalProfit
}

// let result=getMaxProfit([10,7,5,8,11,9])
// let result=getMaxProfit([4,5,6,7,8,9])
// let result=getMaxProfit([9,8,7,6,5,4])
//if the maxNumber is lower than the minNumber should you not sell at all
console.log(result)
