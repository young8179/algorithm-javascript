function confirmEnding(string, target) {
    
    return string.slice(-target.length) === target
  }
  
  console.log(confirmEnding("Bastian", "n"))