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

function convertHTML_1(str) {
  
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");
  return str;
}

console.log(convertHTML_1("Hamburgers < Pizza < Tacos"))

//============================================================
function convertHTML_2(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
console.log(convertHTML_2("Dolce & Gabbana"))

//===================================================
function convertHTML_3(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
console.log(convertHTML_3("Dolce & Gabbana"))