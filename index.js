// Challenge 1 : Grade Generator

const marks = prompt("Enter student matrks (between 0 and 100)")

const studentMarks = parseInt(marks)

let grade 
if (studentMarks > 79) {
    grade = "A"
}else if (studentMarks >= 60 && studentMarks <= 79){
    grade = "B"
}else if (studentMarks >= 50 && studentMarks <= 59){
    grade = "C"
}else if (studentMarks >= 40 && studentMarks <= 49){
    grade = "D"
}else {
    grade = "E"
}

console.log("Grade:" + grade)

document.getElementById(`output`).innerHTML = `Student Grade`: $(grade)