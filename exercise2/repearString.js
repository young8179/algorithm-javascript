function repeatStringNumTimes(str, num) {
    let repeated = str
    if(num > 0){
        for (let i = 0; i < num-1; i++) {
            repeated += str
            }
        return repeated
    }else{
        return ""
    }
  }

  console.log(repeatStringNumTimes("*", 5))