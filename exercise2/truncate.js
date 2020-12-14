// Basic Algorithm Scripting: Truncate a String
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
// Return the truncated string with a ... ending.

function truncateString(str, num) {
    const cutStr = str.slice(0, num) 
    if(str.length > num){
        
        return cutStr + "..."
    }else{
        return cutStr
    }

  }

  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))