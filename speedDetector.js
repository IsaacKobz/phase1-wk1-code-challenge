const readline = require(`readline`)

const rl = readline.createInterface({
    input: process.stdin
    output: process.stdout
})

let speed = ""

rl.question(`What is your Speed`, function(speed){
    function checkSpeed(speed){
        const speedLimit = 70
        const kmPerDemeritPoint = 5

        if (speed <= speedLimit){
            console.log(`Ok`)
            return
        }
        const demeritPoints = Math.floor((speed - speedLimit)/ kmPerDemeritPoint)
        if (demeritPoints > 12){
            console.log(`Suspended License`)
        }
    }
})