function whatIsInAName(collection, source) {
    const srcKeys = Object.keys(source)
    return collection.filter(object=>{
        for (let i = 0; i < srcKeys.length; i++) {
           if(!object.hasOwnProperty(srcKeys[i]) || object[srcKeys[i]] !== source[srcKeys[i]]){
               return false
           }else{
               return true
           } 
            
        }
    })
   
  }

  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))