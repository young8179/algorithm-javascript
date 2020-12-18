// Intermediate Algorithm Scripting: Wherefore art thou
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), 
// because it contains the name and its value, that was passed on as the second argument.
function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source)
    return collection.filter(object=>{
        for (let i = 0; i < srcKeys.length; i++) {
           if(!object.hasOwnProperty(srcKeys[i]) || object[srcKeys[i]] !== source[srcKeys[i]]){
               return false;
           }
        }
        return true;
    })
}
           
/* 
A new array with the elements that pass the test. 
If no elements pass the test, an empty array will be returned.
*/           
   

  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }))

  /*
We filter through the array using .filter().
Using a for loop we loop through each item in the object.
We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
We return false if the above if statement is correct. Otherwise, we return true;
  */