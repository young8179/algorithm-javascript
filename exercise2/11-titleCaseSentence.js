// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    const strArray = str.split(" ")
    const resultArray = []
    for (let i = 0; i < strArray.length; i++) {
        const firstLetter = strArray[i][0].toUpperCase()
        const restLetter = strArray[i].substr(1).toLowerCase()
        resultArray.push(firstLetter + restLetter)
      }
      return resultArray.join(" ")
  }

  console.log(titleCase("I'm a little tea pot"))

  function titleCase_1(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }
  
  console.log(titleCase_1("I'm a little tea pot"))