function inputStudentMarks(marks) {

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
return 'invalid'
    }
    }

inputStudentMarks();
