function factorialize(num) {
    let factorNum = 1
    for (let i = 1; i <= num; i++) {
        factorNum = factorNum * i
       
    }
    return factorNum;
  }

  console.log(factorialize(10))