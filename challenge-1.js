//Function to input student marks and output grades
function inputMarks(marks) {
    let grade;
    if(marks > 100 || marks < 0) {
    grade = 'invalid' //Ensure invalid inputs are handled
    }else if(marks > 79){
        grade = 'A';
    }else if(marks >= 60 && marks <= 79) {
        grade = 'B';
    }else if(marks >= 50 && marks <= 59){
        grade = 'C';
    }else if( marks >= 40 && marks <= 49){
grade = 'D';
    }else if(marks < 40){
        grade = 'E';
    }
return grade;
    }
//Example usage
console.log(inputMarks());
