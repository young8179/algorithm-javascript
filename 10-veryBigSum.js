function aVeryBigSum(ar) {
    let start = 1000000000;
    let array = [];
    for(let i = 0; i < ar; i++){
        start +=  1
        array.push(start)
    }
    // let result = 0
    // for(let j = 0; j < array.length; j++){
    //     result += array[j]
    // }
    // return result;
    return array.reduce((total, val)=> total+val, 0)  //start point is 0. start like 0 +
}

const num = 6;
console.log(aVeryBigSum(num))

