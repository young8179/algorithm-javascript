//Return the number of the longest word in a string=========================
function longestWord(input){
    let split = input.split(" ")
    let countNum = 0
    for (let i = 0; i < split.length; i++) {
        if(countNum < split[i].length){
            countNum = split[i].length
        }
        
    }
    return countNum
}

const string = "The quick brown fox jumped over the lazy dog"
console.log(longestWord(string))

//Check to see if array has duplicates -- if duplicates return true============

function duplicates(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        for (let j = i+1; j < array.length; j++) {
            if(element === array[j]){
                return true
            }
            
        }
    }
    return false
}
              
        

const num = [1,2,3,4,5,7,4];
console.log(duplicates(num))


//Return index of two numbers out of an array that equal the target number given ===

function equalTarget(array, target){
    for (let i = 0; i < array.length; i++) {
        let answer = []
        const firstIndex = array[i];
        for (let j = i+1; j < array.length; j++) {
            const secondIndex = array[j];
            if(firstIndex + secondIndex == target){
                answer.push(i, j)
                return answer
            }
            
        }
        
    }
    return "no duplicates"
}

const inputArray = [2, 7, 11, 15]
const targetNum = 17
console.log(equalTarget(inputArray, targetNum))

//reverse a string=================================================

function reversingString(string){
    let reverseS = []
    for (let i = 0; i < string.length; i++) {
        const element = string[i];
        reverseS.unshift(element)
        
    }
    
    return reverseS.join("")
}

const inputS = "hello world"
console.log(inputS.split("").reverse().join(""))
console.log(reversingString(inputS))