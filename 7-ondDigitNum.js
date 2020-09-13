// 7) We are provided a positive integer num. Can you write a method to repeatedly add all of its digits 
// until the result has only one digit?
//    
//    Sample Input:
//    49
//    Sample Output:
// 4
// Sample Input:
// 438
// Sample Output:
// 6

function digits(num){
    while(num > 9){
        const arr = String(num).split("");
        num = arr.reduce((num1, num2) => num1 + Number(num2), 0)
    }
    return num
}
    
console.log(digits(49))
