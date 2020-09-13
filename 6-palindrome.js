// 6) Check to see if a word is a palindrome (if you reverse a word
//     and it is the same word
//        Sample Input:
//        mom
//        Sample Output:
//        true
//     Sample Input:
//     racecar
//     Sample Output:
//     true

function palindrome(string){
    if(string == string.split("").reverse().join("")){
        return true;
    }else{
        return false;
    }
}

console.log(palindrome("racecar"))