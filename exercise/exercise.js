
let arr = [1,2,3,4]
let stringArr = ["apple", "water", "home"]

function check(userInput){
    return Array.isArray(userInput)

}

console.log(check(arr))
//-----------------------------------------

//-----------------------------------------

let getFirst1 = (array, n) => {
    let first1 = array.splice(n, 1)
    console.log(first1)
    let letter = String(first1).charAt(0)
    
    
    return letter
}

console.log(getFirst1(stringArr, 1))