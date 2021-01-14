/*
Write a program that prints the numbers from 1 to 100. But for multiples of three print 
“Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.
*/

/*
For every number that is divisible by 3 and 5, console log "FizzBuzz".
For every number that is divisible by only 3 and not 5, console log "Fizz".
For every number that is divisible by only 5 and not 3, console .log "Buzz".
Here is a partial example with numbers from 12 to 20:
...
"Fizz"
13
14
"FizzBuzz"
16
17
"Fizz"
19
"Buzz"
...
*/

function fizzbuzz1(){
    
    for (let i = 1; i <= 100; i++) {
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz")
        }else if(i % 3 === 0){
            console.log("Fizz")
        }else if(i % 5 === 0){
            console.log("Buzz")
        }else{
            console.log(i)
        }
        
    }
}

console.log(fizzbuzz1())

//=======================other solution================

for(let i=0;i<100;)
  console.log(
    ( ++i%3 ? '' : 'fizz' ) + ( i%5 ? '' : 'buzz' ) || i
  )