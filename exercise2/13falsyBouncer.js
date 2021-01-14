// Basic Algorithm Scripting: Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.



function bouncer(arr) {
    let result = []
    arr.map(element=>{
        if(!!element){
             result.push(element)
            }
        })
        return result
  }

  console.log(bouncer([7, "ate", "", false, 9]))