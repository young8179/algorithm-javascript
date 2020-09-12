
function grading(grade){
    if(grade >= 90){
        console.log('Grade is A');
    }
    else if (grade >= 80 && grade <= 89){
        console.log('Grade is a B');
    }
    else if (grade >= 70 && grade <= 79){
        console.log('Grade is C');
    }
    else if (grade >= 60 && grade <= 69){
        console.log('Grade is D');
    }
    else if (grade >= 0 && grade <= 69){
        console.log('Grade is F');
    }
    else {
        console.log('you didn\'t enter a real grade');
    }
}
grading(78);