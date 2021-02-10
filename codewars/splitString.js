/*
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters 
then it should replace the missing second character of the final pair with an underscore ('_').
*/

function solution(str){
   const strArray = str.split("")
   let result = []
   while(strArray.length >= 2){
       let letter = strArray.splice(0,2)
       result.push(letter.join(""))
    }
    if(strArray.length == 1 ){
        result.push(strArray[0] + "_")
    }
    return result;
}

console.log(solution("abcdef"))