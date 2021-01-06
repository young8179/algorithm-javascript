/*
Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {
    var flattenedArray = [];
  
    // Create function that adds an element if it is not an array.
    // If it is an array, then loops through it and uses recursion on that array.
    // made another func. it will keep looping until array is gone 
    var flatten = function(arg) {
      if (!Array.isArray(arg)) {
        flattenedArray.push(arg);
      } else {
        for (var a in arg) {
          flatten(arg[a]);
        }
      }
    };
  
    // Call the function for each element in the array
    arr.forEach(flatten);
    return flattenedArray;
  }
  
  console.log(steamrollArray([1, [2], [3, [[4]]]]))