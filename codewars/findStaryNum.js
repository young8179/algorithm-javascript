/**
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
 */

function stray(numbers) {
    let standard = numbers[0]
    let single = []
    let multi = []
    for (let i = 1; i < numbers.length; i++) {
        if(standard === numbers[i]){
            multi.push(numbers[i])
        }else{
            single.push(numbers[i])
        }
    }
    if(single.length === 1){
        return Number(single.join(""))
    }else if(multi.length === 0 ){
        return numbers[0]
    }   
  }

  console.log(stray([17, 17, 3, 17, 17, 17, 17]))

  //other solution
  function stray1(numbers) {
    const num = numbers.sort((a, b)=>{
        return a - b
    });
    return (num[0] === num[1]) ? num[num.length-1] : num[0];
  }
  console.log(stray1([17, 17, 3, 17, 17, 17, 17]))



  function stray2(numbers) {
    return numbers.reduce((x, y) => x ^ y);
  }