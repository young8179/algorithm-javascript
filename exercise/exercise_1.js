//Write a simple javascript program to join all elements of the following array into a string.


let arr = [1,2,3,4]
let stringArr = ["apple", "water", "home"]


let join1 = (array)=>{
    return array.join("")
            
}

console.log(join1(stringArr))
console.log(typeof join1(stringArr))

//typeof(a)