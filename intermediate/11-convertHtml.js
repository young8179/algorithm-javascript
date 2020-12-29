/*
Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding HTML entities.
*/
/*
<      &it;
>      &gt;
&      &amp;
"      &quot;
'      &apos;

*/


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
  
console.log(convertHTML("Hamburgers < Pizza < Tacos"))

//================================================================
