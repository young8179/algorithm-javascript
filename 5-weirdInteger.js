// Given an integer, n, perform the following conditional
// actions:
//    If n is odd, print Weird
//    If n is even and in the inclusive range of 2 to 5, print Not
// Weird
//    If n  is even and in the inclusive range of 6 to 20, print
// Weird
// If n is even and greater than 20, print Not Weird print whether or not n is weird.
// Sample Input: n = 3;
// Sample Output: "WEIRD"
// Sample Input:
// n = 22;
// Sample Output:
// "NOT WEIRD"

function weirdInt(num){
    if(num % 2 != 0){
            return "WEIRD";
}
            
    else if(num % 2 == 0){
            if(num >= 6 && num <= 20){
                return "WEIRD";
            }else if(num >= 2 && num <= 5){
                return "NOT WEIRD";
            }else if(num > 20){
                return "NOT WeIRD";
            }
    }else{
        return "weird"
    }
}

console.log(weirdInt(4))