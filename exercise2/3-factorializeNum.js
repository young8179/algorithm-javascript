function factorialize(num) {
    let factorNum = 1
    for (let i = 1; i <= num; i++) {
        factorNum = factorNum * i
        console.log(factorNum)
       
    }
    return factorNum;
  }

  console.log(factorialize(5))