/*
Intermediate Algorithm Scripting: Binary Agents
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binaryAgent(str) {
    const stringArray = str.split(" ").map((letter)=> {
        let newArray = [];
        let count = 0
        for (let i = 0; i < letter.length; i++) {
            const convertedNum = letter[i] * Math.pow(2,letter.length - (i + 1))
            count += convertedNum
        }
        newArray.push(count)
        count = 0
       
        return newArray.join(",")
    })
    // console.log(stringArray)
    let result = stringArray.map((element)=>{
        return String.fromCharCode(element)
    })
    return result.join("")
    

  }
  
  console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))