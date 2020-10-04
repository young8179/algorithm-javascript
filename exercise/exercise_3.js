//sort the items of an array.
let arr = [1, 7, 3, 4, 14, 266, 32]
let stringArr = ["apple", "watioioer", "hoooooooooooome"]
//-----------------------------
let sorted = arr.sort((a, b)=>{
    return a - b
})
console.log(sorted)
//----------------------------
let stringSort = stringArr.sort()
console.log(stringSort)
//------------------------------
let sortByLength = (input)=>{
    input.sort((a, b,)=>{
        return a.length - b.length
    })
    console.log(input)
}
sortByLength(stringArr)



