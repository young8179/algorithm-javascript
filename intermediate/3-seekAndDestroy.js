function destroyer(arr) {
    const args = Array.prototype.slice.call(arguments)
    let result = []
    arr.filter(element =>{
        if(!args.includes(element)){
            result.push(element)
        }
    })
    return result
  }

  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))