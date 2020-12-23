function fearNotLetter(str) {
    const alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let strLength = str.length
    const strFirstIndex = alpha.findIndex(element => element == str.charAt(0))
    let count = 0;
    for (let i = strFirstIndex; i <= strFirstIndex + strLength; i++) {
        if(str.charAt(count) !== alpha[i]){
            result = alpha[i]
            break      
        }   
        count ++    
        
    }
    return result
}

console.log(fearNotLetter("abcdefghjklmno"))

//==================================================

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }