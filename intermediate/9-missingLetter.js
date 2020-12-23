function fearNotLetter(str) {
    const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let strLength = str.length
    const strFirstIndex = alpha.findIndex(element => element == str.charAt(0))
    let count = 0;
    console.log(strFirstIndex)
    for (let i = strFirstIndex; i <= strFirstIndex + strLength; i++) {
        console.log([str.charAt(count), alpha[i]])
        if(str.charAt(count) !== alpha[i]){
            result = alpha[i]
            break      
        }   
        count ++    
        
    }
    return result
}

console.log(fearNotLetter("abcdefghjklmno"))