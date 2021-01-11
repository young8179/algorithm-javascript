/*
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. 
The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.


*/

let Person = function(firstAndLast) {
    const personArray = firstAndLast.split(" ")
    this.setFullName = function(str) {
        const setArray = str.split(" ")
        if(setArray.length > 1){
            personArray.splice(0,1,setArray[0])
            personArray.splice(1,1,setArray[1])
            return personArray.join(" ")
        }
      };
      this.setLastName = function(str) {
        const setArray = str.split(" ")
        if(setArray.length > 1){
            personArray[1] = setArray[1]
            return personArray.join(" ");
        }else{
            personArray[1] = str
            return personArray.join(" ");
        }

      };
      this.setFirstName = function(str) {
        const setArray = str.split(" ")
        if(setArray.length > 1){
            personArray[0] = setArray[0]
            return personArray.join(" ");
        }else{
            personArray[0] = str
            return personArray.join(" ");
        }

      };
    this.getFullName = function() {
      return personArray[0] + " " + personArray[1];
    };
    this.getFirstName = function() {
        return personArray[0];
      };
    this.getLastName = function() {
        return personArray[1];
      };
   
    return firstAndLast;
  };
  
  let bob = new Person('Bob Ross');
  bob.setFullName("Haskell Curry")
  console.log(bob.getFullName())