// The year can be evenly divided by 4, is a leap year, unless:
// The year can be evenly divided by 100, it is NOT a leap year, unless:
// The year is also evenly divisible by 400. Then it is a leap year.

function leapYear(year){
    if(year % 4 == 0){
        if(year % 400 == 0){
            return true;
        }else if(year % 100 == 0){
            return false;
        }else{
            return true;
        }
    }else{
        return false
    }
}

console.log(leapYear(1923));