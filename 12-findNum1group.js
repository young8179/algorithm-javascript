// Warm-up:
// Given an array of 0s and 1s, count the number of "islands
// of 1s" (e.g. groups of connecting 1s).
// Example: [0, 1, 1, 0, 1, 0, 1, 1, 1] -> 3


function findGroup(array){
    let counter = 0
    for (let i = 0; i < array.length; i++) {
        
        
        if(array[i] == 0 && array[i] !== array[i+1]){
            counter++
        }
            
    
    }
    return counter
}
const input =  [0, 1, 1, 0, 0, 0, 1,0 ,1,1]
console.log(findGroup(input))