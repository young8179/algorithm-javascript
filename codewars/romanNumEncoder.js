/*
Create a function taking a positive integer as its parameter 
and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit 
and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; 
resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: 
MDCLXVI.

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

function solution(number){
    const romanNum = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let result = ""
    let time = 0
    let standNum = number
    if(standNum / romanNum.M >= 1){
        time = Math.floor(number / romanNum.M)
        result += "M".repeat(time)
        standNum = number - (romanNum.M * time)
        
    }
    if(standNum / romanNum.D >= 1){
        time = Math.floor(standNum / romanNum.D)
        result += "D".repeat(time)
        standNum = standNum - (romanNum.D * time)
    }
    if(standNum / romanNum.C >= 1){
        time = Math.floor(standNum / romanNum.C)
        result += "C".repeat(time)
        standNum = standNum - (romanNum.C * time)
    }
    if(standNum / romanNum.L >= 1){
        time = Math.floor(standNum / romanNum.L)
        result += "L".repeat(time)
        standNum = standNum - (romanNum.L * time)
    }
    if(standNum / romanNum.X >= 1){
        time = Math.floor(standNum / romanNum.X)
        result += "X".repeat(time)
        standNum = standNum - (romanNum.X * time)
    }
    if(standNum / romanNum.V >= 1){
        time = Math.floor(standNum / romanNum.V)
        result += "V".repeat(time)
        standNum = standNum - (romanNum.V * time)
    }
    if(standNum / romanNum.I >= 1){
        time = Math.floor(standNum / romanNum.I)
        result += "I".repeat(time)
        standNum = standNum - (romanNum.I * time)
    }
    
    return result
  }

  console.log(solution(3000))