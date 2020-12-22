function spinalCase(str) {
    let tapCase = str[0].toLowerCase() + ""

    for (let i = 1; i < str.length; i++) {
        if(str[i] == " " || str[i] == "_"){
            tapCase += "-"
        }else if(str[i] == str[i].toUpperCase()){
           tapCase += "-" + str[i].toLowerCase() 
        }else{
            tapCase += str[i]
        } 
        
    }
    console.log(tapCase.includes("--"))
    if(tapCase.includes("--")){
        tapCase = tapCase.split("--").join("-")
    } 

    return tapCase
  }

  console.log(spinalCase("thisIsSpinalTap"))