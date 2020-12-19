/*
Intermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

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


  //=========================other solution==================================


  function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}
