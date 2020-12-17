// Intermediate Algorithm Scripting: Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr){
    let highNum = 0
    let lowNum = 0
    if(arr[0] > arr[1]){
        highNum = arr[0]
        lowNum = arr[1]
    }else{
        highNum = arr[1]
        lowNum = arr[0]
    }
    let allNum = []
    for (let i = lowNum; i <= highNum; i++) {
        allNum.push(i) 
    }
    const result = allNum.reduce((a,b)=>{
        return a + b
    })
    return result    

}
console.log(sumAll([1, 4]))

//========================================================

function sumAll(arr){
    arr.sort((a,b)=>{
        return a - b
    })
    let highNum = arr[1]
    let lowNum = arr[0]
    let allNum = []
    for (let i = lowNum; i <= highNum; i++) {
        allNum.push(i) 
    }
    const result = allNum.reduce((a,b)=>{
        return a + b
    })
    return result    

}
console.log(sumAll([5, 1]))


//====================================================
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i = min; i <= max; i++) {
      temp += i;
    }
    return temp;
  }
  
  sumAll([1, 4]);