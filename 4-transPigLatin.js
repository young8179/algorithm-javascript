// 4) Write a program for translating words into pig latin
// 1. For words that begin with consonants sounds, all letters
// before the inital vowel are placed
// at the end of the word sequence. Then "ay" is added (ex:
// "what" = "atwhay", "me" = "emay")
// 2. When words begin with consonant clusters, the clusters
// should be moved to the end of the word sequence and "ay" is affixed (ex: "glove" = "oveglay").
// 3. For words that begin with vowel sounds, simply add "way" to the end of the word (ex. "explain", "explainway")



function pigLatin(string){
    string = string.toLowerCase();
    const vowel = ["a", "e", "i","o","u"];
    let vowelIndex = 0;
    if(vowel.includes(string[0])){
        return string + "way";
    }else{
        for (let char of string) {
            if(vowel.includes(char)){
                vowelIndex = string.indexOf(char);
                break;
        }
    }
           return string.slice(vowelIndex) + string.slice(0, vowelIndex) + "ay";
            
        }
    }

    console.log(pigLatin("water"));
