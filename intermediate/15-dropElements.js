/*
Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element 
(the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, 
arr should be returned as an empty array.
*/

function dropElements(arr, func) {
    let index = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if(func(arr[i])){
            index = arr.indexOf(arr[i])
            break
        }else{
            count ++
        }
    }
    if(count === arr.length){
        return []
    }else{
        return arr.splice(index, arr.length)
    }
}
            
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}))
console.log("=================================================")


function dropElements_1(arr, func) {
    // drop them elements.
    var times = arr.length;
    // the reason we use times is that it wont change even after we use shift. if we use 
    // arr.length in for loop, the array will be changed after shift
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }

  console.log(dropElements_1([1, 2, 3, 4], function(n) {return n > 5;}))
        

    
        
   
    

  