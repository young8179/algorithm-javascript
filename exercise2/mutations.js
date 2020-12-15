// Basic Algorithm Scripting: Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
    const convertedArray = arr[1].toLowerCase().split("")
    let count = 0
    for (let i = 0; i < convertedArray.length; i++) {
        if(arr[0].toLowerCase().includes(convertedArray[i])){
            count ++
        }
    }
     if(count == convertedArray.length){
         return true
     }else{
         return false
     }   
  }

  console.log(mutation(["hello", "hey"]))