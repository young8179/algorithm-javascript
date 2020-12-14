//1. Explain HTTPS negotation steps, the "handshake"
//this is a negotiation between two parties on a network such as a browser/web server, to establish
//details of their connection, determine version, which cyber suit will encrypt communication.
//a cyber suit= pre-existing selection of agreed on components.
//2. Explain HTTP protocol
// This is where the client (web browser) sends requests to web servers. This is the request/response where 
//the server will respond with html, images, etc. It could give back a status such as 200, or 404.
//3. Explain CORS
//Cross-Origin-Resource-Sharing is a policy for allowing the server to describe the requests receieved,
//preventing sharing resources from other websites. Used when fetching API's, webfonts, and CSS shapes.
//4. Explain "this" keyword
//"This" refers to the object it belongs to. In a method, it refers to the owner object. Alone and in 
//a function it refers to the global object.
//5. Explain how prototypes work
//prototypes allow you to add new properties to object constructors, also add to methods, arrays.
//6. Explain difference between == and === 
//They are both comparison operators. The == is evaluating if the two elements have the same value,
//while the === evaluates if they have the same value and type.
//7. Describe Advantages of using "Use.Strict"
//eliminates any "this" coersion, eliminates any null/undefined values being coerised into a global variable
//lower chances of bugs
//disallows duplicate property names
//8. What is NaN, How can you test it
//NaN stands for not a number. You can test it with typeof().
//9. Define a Promise
// an object that may produce a single value some time in the future. Either resolved or why it wasn't.
//it has three states, rejected, fullfilled or pending.
//10. What is callback hell?
//too many nested callbacks, promises keep you from nesting.
//11. How does Node.js handle child threads
//node.js is a single threaded process, it does not expose child threads, js does spawn child threads for cetains tasks
//such as asynch i/o
//12. What is the best practice for the first arguement passed into a node.js callback handler?
//Arrow Function. 
//13. ALGO QUESTION:
//find pallindrome, which is a function that will tell you if a string is spelled
//the same, forward and backward
function findP(str) {
    const newStr = str.toLowerCase().split("")
    for (let i = 0; i < (newStr.length)/2; i++) {
        if(newStr[i] == newStr[newStr.length-i-1]) {
            return `${str}  is a palindrome`
        } else {
            return `${str}  is not a palindrome`
        }
    }
}
console.log(findP("eye"));  //true
console.log(findP("racecar")); //true
console.log(findP("interview")); //false
console.log(findP("function")); //false
//or 
function isPand(str) {
    return str.split('').reverse().join('');
}
console.log(isPand("eye"))
console.log(isPand("panda"))
//14. ALGO QUESTION:
// write function that returns occuring letters
function count(letter, string) {
    var count = 0;
    for(var i=0; i < string.length; i++) {
        if(string[i] === letter) {
            count++
        }
    }   
    return count;
}
console.log(count("a", "aaaabbbbccc"))
//15. ALGO QUESTION:
////given array of numbers 1-100, exactly one number in that array is a duplicate,
//write method to find duplicate
function findDup(array) {
    let dup = [];
    let obj = {}
    for (let i = 0; i < array.length; i++) {
        if(!obj[array[i]]) {
            obj[array[i]] = 1
        }
        else {
            dup.push(array[i]);
        }
    }
    return dup;
}
console.log(findDup([1,2,3,3,4,5,4]))