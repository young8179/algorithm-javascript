/*
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
*/

function wave(str){
    let result = []
    for (let i = 0; i < str.length; i++) {
        let strArray = str.split("")
        if(str[i] === " "){
            continue
        }
        strArray[i] = str[i].toUpperCase()
        result.push(strArray.join(""))     
    }
   return result
  }

  console.log(wave("hello"))