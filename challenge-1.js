function inputSudentGrade () {
    //prompts the user to enter student's marks
    const marks = parseInt(prompt("Please enter student marks (between 0 and 100): "), 10);
    // Ensure that the input is between 0 and 100
    if (marks < 0 || marks > 100 || isNaN(marks)) {
        console.log("Invalid marks entered. Please enter a number between 0 and 100."); 
        return;
}