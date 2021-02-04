/*
  Let P be the Principal = 1000.00      
  Let I be the Interest Rate = 0.05      
  Let T be the Tax Rate = 0.18      
  Let D be the Desired Sum = 1100.00


After 1st Year -->
  P = 1041.00
After 2nd Year -->
  P = 1083.86
After 3rd Year -->
  P = 1128.30
*/

function calculateYears(principal, interest, tax, desired) {
   const money =  principal + (principal*interest) - ((principal*interest) * tax)
   let year = 0
   if(principal >= desired){
     return year
   }else{
     for (let i = 1; i > 0; i++) {
      const money =  principal + (principal*interest) - ((principal*interest) * tax)
      principal = money
      if(principal >= desired){
        year = i
        break;
       
     }  
    }

   }
  return year
}

console.log(calculateYears(1000, 0.05, 0.18, 1100)) ;