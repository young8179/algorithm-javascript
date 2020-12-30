/*
Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    let fib = [1, 1]
    for (let i = 0; i < num; i++) {
        let nextNum = fib[fib.length - 1] + fib[i]
        if(nextNum <= num){
            fib.push(nextNum)
        }
    }
    return fib.filter((odd) => odd % 2 !== 0).reduce((a,b)=> a+ b)
    
}

  console.log(sumFibs(75025))

  //================================================================
  function sumFibs_1(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
  
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }

  console.log(sumFibs_1(4))