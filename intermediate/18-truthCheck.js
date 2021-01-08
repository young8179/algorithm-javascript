/*
Intermediate Algorithm Scripting: Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection 
(first argument).

In other words, you are given an array collection of objects. 
The predicate pre will be an object property and you need to return true if its value is truthy.
 Otherwise, return false.

In JavaScript, truthy values are values that translate to true 
when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.
*/

function truthCheck(collection, pre) {
    let count = 0
    collection.map((object)=>{
        if(object[pre]){
            return count ++
        }
    })
    return count === collection.length
  }
  
  console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"))


  console.log("=============other solution==================")
  function truthCheck_1(collection, pre) {
    let count = 0
    return collection.every((object)=>{
        return object.hasOwnProperty(pre) && Boolean(object[pre])
        // return object[pre]   it can be more simple answer
    })
    
  }
  
  console.log(truthCheck_1([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"))