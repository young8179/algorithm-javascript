function convertHTML(str) {
    
    for (let i = 0; i < str.length; i++) {
      if(str[i] == "<"){
        str = str.replace(str[i], "&lt;")
      }
      else if(str[i] == ">"){
        str = str.replace(str[i], "&gt;")
      }
      else if(str[i] === "&"){
        str = str.replace(str[i], "&amp;")
      }
      else if(str[i] === "\""){
        str = str.replace(str[i], "&quot;")
      }
      else if(str[i] === "\'"){
        str = str.replace(str[i], "&apos;")
      }
      
    }
    return str
  }