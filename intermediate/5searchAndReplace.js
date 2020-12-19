function myReplace(str, before, after) {
    const strArray = str.split(" ")
    const index = strArray.findIndex((word)=>{
        return word === before
    })
    let targetWord = strArray[index]
    console.log(targetWord)
    if(targetWord.charAt(0) === targetWord.charAt(0).toUpperCase()){
        const upperArray = after.split("")
        upperArray.splice(0,1,upperArray[0].toUpperCase())
        return str.replace(strArray[index], upperArray.join(""))
    }else if(targetWord.charAt(0) === targetWord.charAt(0).toLowerCase()){
        const lowerArray = after.split("")
        lowerArray.splice(0,1,lowerArray[0].toLowerCase())
        return str.replace(strArray[index], lowerArray.join(""))
    }else{
        console.log(strArray)
        return str.replace(strArray[index], after)
    }

  }
  
  console.log(myReplace("I think we should look up there", "up", "Down"))