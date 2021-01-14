function findLongestWordLength(str) {
    let longestStr;
    let count = 0;
    const strArray = str.split(" ")
    for (let i = 0; i < strArray.length; i++) {
        
        if(strArray[i].length > count){
            count = strArray[i].length;
            longestStr = strArray[i]
        }
    }
    return longestStr + " / " + count
}
        


  console.log(findLongestWordLength("The quick brown fox jumped overrred the lazy dog"))