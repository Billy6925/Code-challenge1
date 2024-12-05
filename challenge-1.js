// Create a function that prompts user to input student marks
function inputStudentMarks(marks) {
//determines the grade based on marks
    let grade;
    if(marks > 79 && marks <= 100) {
        return (grade = 'A');
    }else if(marks >= 60 && marks <= 79) {
        return (grade = 'B');
    }else if(marks > 49 && marks <= 59) {
        return (grade = 'C');
    }else if(marks >=40 && marks < 49) {
        return (grade = 'D');
    }else if(marks >= 0 && marks < 40) {
        return (grade = 'E'); 
    }else{
        //if the marks is less than 0 or greater than 100
return 'invalid'
    }
    }
//Example usage
inputStudentMarks();
