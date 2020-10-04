
function prefix(array){
    let output = array[0]
    for (let index = 0; index < array.length; index++) {
        const word = array[index];
        const letterArray = word.split("")
         for (let index = 0; index < letterArray.length; index++) {
             const letter = letterArray[index];
             if(output.split("").includes(letter)){
                 return
             }else{
                 output.split("").filter(!letter).join() 
             }
             
         }
    }
        
    return output
}
let array = ["flower", "flow", "flight"]
console.log(prefix(array))
