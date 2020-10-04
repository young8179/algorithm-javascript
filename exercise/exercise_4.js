// Write a JavaScript program to find the most frequent item of an array.


let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9,
3];



function mostFreq(input){
    let max = 0
    let container = {};

    input.forEach((element) => {
        if(container[element]){
            container[element] ++
        }else{
            container[element] = 1
        }
        
        if(container[element] > max){
            max = container[element]
            maxElement = element                //If you assign a value to a variable that has not been declared, 
        }                                       //it will automatically become a GLOBAL variable.
                                                //if you want to make global variable in the scope, dont put var let const
    });
    return maxElement
}

console.log(mostFreq(arr1))
        
        
    
        
        