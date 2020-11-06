// Find the mean, median, and mode of the following array:
// [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8]
// Mean: Average of all the numbers
// Median: Number at exact middle of sorted array
// Mode: The number that appears the most times

const array = [4, 3, 1, 2, 2, 7, 9,10, 9, 9, 9, 9,110, 111];

// mean================================================
const total = array.reduce((acc ,val)=>{
    return acc + val
})

const mean = total/array.length
console.log("==============mean======================")
console.log(mean)

//median===================================================
const sortedArray = array.sort((a,b)=> a - b)
const middleIndex = parseInt(array.length/2)
console.log("==============median======================")
console.log(middleIndex)
console.log(sortedArray)
console.log(sortedArray[middleIndex - 1])

// mode =========================================================

function findModeNum(a){
    let countObj = {}
    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        if(countObj.hasOwnProperty(element)){
            countObj[element] ++ 
        }else{
            countObj[element] = 1
        }
    }
    const value = Object.values(countObj)
    const maxNum = value.reduce((acc, val)=> acc > val ? acc : val)
    console.log(countObj)
    for (const key in countObj) {
        if(countObj[key] == maxNum){
            return key
        }
    
    
}
}
console.log("==============median======================")
console.log(findModeNum(array))    
    
        
        
    
    

