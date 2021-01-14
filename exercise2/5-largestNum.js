function largestOfFour(arr) {
    let maxNumArray = []
    for (let i = 0; i < arr.length; i++) {
        const max = Math.max.apply(null, arr[i])
        maxNumArray.push(max)
        
    }
    return maxNumArray
  }

  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

  function largestOfFour1(arr) {
    let maxArray = []
    arr.map(result =>{
        const max = Math.max.apply(null, result)
        maxArray.push(max)
    })
    return maxArray
  }

  console.log(largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))