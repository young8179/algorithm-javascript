// 1) Write a JavaScript function to get the greatest common divisor (gcd) of two integers.
//     Sample Input:
//     12, 144;
//     Sample Output:
//     12
//     Sample Input:
//     95, 35;
//     Sample Output:
//     5


function gcd(num1, num2) {
    var commonDivisor = [ ];
    let highNum = num1;
    if(num1 < num2){
        highNum = num2;
    
    }
    
    for (let i = 1; i <= highNum; i++) {
        if(num1 % i === 0 && num2 % i === 0){
            commonDivisor.push(i);
        }
    }    
    const returnNum = Math.max(...commonDivisor);
    return returnNum; 
    
}

const result = gcd(12, 144);
console.log(result);
