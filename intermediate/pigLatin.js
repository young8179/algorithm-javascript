/* 
Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, 
move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.
*/

function translatePigLatin(str) {
  const vowel = ["a", "e", "i", "o", "u"]
  let consonant = ""
  let ay = "ay"
  for (let i = 0; i < str.length; i++) {
    if(!vowel.includes(str[i])){
      consonant += str[i]
    }else{
      break;
    }
  }
  let result
  if(consonant.length > 0){
    result = str.slice(consonant.length) + consonant + ay
  }else{
    result= str + "way"
  }

  return result
      
}

  console.log(translatePigLatin("eight"))

  
  function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
  