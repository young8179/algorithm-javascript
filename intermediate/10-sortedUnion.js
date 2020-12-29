/**
 Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
 */

function uniteUnique(arr) {
  const args = Array.prototype.slice.call(arguments)
  // let arg = [...arguments]
  let bigArray = []
  let result = []
  for (let i = 0; i < args.length; i++) {
    bigArray = bigArray.concat(args[i])
    
  }
  for (let j = 0; j < bigArray.length; j++) {
    if(!result.includes(bigArray[j])){
      result.push(bigArray[j])
    }
    
  }
   return result
  }

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))