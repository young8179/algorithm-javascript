// Say you have an array for which each element is the price
// of a given stock and the index represents the day.
// If you were only permitted to complete at most one
// transaction (i.e., buy one and sell one share of the
// stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

// [7,1,5,3,6,4] -> 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5
// (price = 6), profit = 6-1 = 5. Not 7-1 = 6, as selling price
// needs to be larger than the buying price.
// [7,6,4,3,1] -> 0
// Explanation: In this case, no transaction is done, i.e. max
// profit = 0.
//====================================================================
function stock(arr){
    let lowP = Math.min(...arr)
    let high = 0;
    const findIndex = arr.indexOf(lowP)
    for (let i = findIndex; i < arr.length; i++) {
        if(high < arr[i]){
            high = arr[i]
        }
        
    }
    return high - lowP
}

// const price = [7,1,5,3,6,4]
// console.log(stock(price))



// function stock(arr){
//     let lowP = Math.min(...arr)
//     let highP = 0;
    
    
    
    
//     for (let i = 0; i < arr.length; i++) {
//         if(highP < arr[i]){
//             highP = arr[i]
//             console.log(highP)
//         }
//         let newLowP = 0
//         findIndexH = arr.indexOf(highP)   
//         const findIndex = arr.indexOf(lowP)
//         for (let k = findIndexH; k < arr.length; k++) {
//             if(highP < arr[k]){
//                 highP = arr[k]
//             }
            
//         }
    
//         console.log(lowP)
        
//         let case_0 = highP - lowP
//         // console.log(case_0)
        
//         let newHighP = 0
//         let newArray = []
//         for(let j = findIndexH; j < arr.length; i--){
//             if(newHighP < arr[j]){
//                 newHighP = arr[j]
//             }
//             newArray.push(arr[j])
//             let newLowP = Math.min(...newArray)
//             if(arr[j] < lowP){
//                 let case_1 = newHighP - newLowP
//                 // console.log(case_1)
//                 return case_1
//             }else{
//                 return case_0
//             }
//         }    
//         }
        
    
    
// }


console.log("--------------------------------")
const price = [7,22,5,3,6,100]
console.log(stock(price))