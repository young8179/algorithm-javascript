//Write a javascript program which accept a number as input and insert dashes(-) between each number.

let num = 402392191

let dashes = (userInput)=>{
    return String(userInput).split("").join("-")
}

console.log(dashes(num))
console.log(typeof dashes(num))
const check = typeof dashes(num)
console.log(check)