// Write a JavaScript program to check a student's total marks in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam" the student will receive A+ grade and total marks must be greater than or equal to 90. If the student gets an A+ grade, return true, otherwise return false.
function resultCalculation(isExam,marks){
    if(isExam){
        return marks>=90 && marks <=100 ? "Final Exam: Grade: A+" : "Final Exam: Grade: A-";
    }
    else{
        return marks >=89 && marks <=100 ? "Normal Exam: Grade: A+" : "Normal Exam: Grade: A-";
    }
}
console.log(resultCalculation(true,89));
console.log(resultCalculation(true,90));
console.log(resultCalculation(true,101));
console.log(resultCalculation(false,89));