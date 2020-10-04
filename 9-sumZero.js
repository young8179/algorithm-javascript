

//find num to make 0 for each index

//check the num is in the array

const sumZero = (array)=>{
    
    let result = []
    for (let index = 0; index < array.length-1; index++) {
        const firstElement = array[index];
        for (let j = index+1; j < array.length; j++) {
            const secondElement = array[j];
            if(firstElement + secondElement == 0)      {
                let target = secondElement;  
                if(array.includes(target)){
                    result.push(firstElement);
                    result.push(target);
                    console.log(result)
                    break;
                    
                    
        
                }else{
                    return "undefine"
                }
            }
            
            
        }
       break
    }
}
const array = [8, 5, -8, -1, 3, -5, 4, -13]
sumZero(array)
