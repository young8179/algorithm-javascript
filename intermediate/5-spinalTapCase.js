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

  //============================================

  function spinalCase(str) {
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Split on whitespace and underscores and join with dash
    return str
      .toLowerCase()
      .split(/(?:_| )+/)
      .join("-");
  }
  
  // test here
  spinalCase("This Is Spinal Tap");