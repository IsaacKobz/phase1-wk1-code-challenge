"Write a function that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade
"A > 79, B - 60 to 79, C - 59 to 49, D - 40 to 49, E - less 40"

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin
    output: process.stdout
})

let marks = ""

rl.question("How many marks did the student score", function(marks){
    function gradeGenerator(marks){
        //first condition if grade is between 0 and 40
        if(marks>=0&&marks < 40){
            console.log(`E`)
            console.log(`Student's Grade is E`)
        }
        else if(marks > 40 && marks <= 49){
            console.log(`D`)
            console.log(`Student's Grade is D`)
        }
    }
})


