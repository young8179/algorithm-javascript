// Basic Algorithm Scripting: Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var index = 0;
  
  while (index < arr.length){
    newArr.push(arr.slice(index,index+size));
    index += size;
  }
  
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e"], 2))