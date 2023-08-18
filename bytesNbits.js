// notes: use parseInt
// use the loop to call prompts that many times
// understand how prompts even works!

const prompts = require('prompts');

function bytesNBitsGame() {

    let answerInt = 0;
    let inputUnit = null;

    // Generate integer between 1-128
    const randomInt = randomIntFromInterval()
    console.log('the randomInt generated', randomInt)

    //for (let j = 0; j < 1; j++) {

    const unit = randomUnit();

    if (unit === 'bits') {
        inputUnit = 'B';
        answerInt = randomInt / 8
        console.log(`____ B = ${randomInt} bits`)
        return `${answerInt}`

    } else if (unit === 'TB') {
        inputUnit = 'GB';
        answerInt = randomInt * 1000
        console.log(`____ GB = ${randomInt} TB`)
        return `${answerInt}`

    } else if (unit === 'KB') {

        const unitArr = ['B', 'MB']
        inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]

        if (inputUnit === 'B') {
            answerInt = randomInt * 1000
            console.log(`____ B = ${randomInt} KB`)
            return `${answerInt}`
        } else {
            answerInt = randomInt / 1000
            console.log(`____ MB = ${randomInt} KB`)
            return `${answerInt}`
        }

    } else if (unit === 'MB') {

        const unitArr = ['KB', 'GB']
        inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]

        if (inputUnit === 'KB') {
            answerInt = randomInt * 1000
            console.log(`____ KB = ${randomInt} MB`)
            return `${answerInt}`
        } else {
            answerInt = randomInt / 1000
            console.log(`____ GB = ${randomInt} MB`)
            return `${answerInt}`
        }

    } else if (unit === 'GB') {

        const unitArr = ['MB', 'TB']
        inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]

        if (inputUnit === 'MB') {
            answerInt = randomInt * 1000
            console.log(`____ MB = ${randomInt} GB`)
            return `${answerInt}`
        } else {
            answerInt = randomInt / 1000
            console.log(`____ TB = ${randomInt} GB`)
            return `${answerInt}`
        }
    }
    console.log('THE ANSWERINT', answerInt)
}

async function theGame() {
    const response = await prompts({
        type: 'text', name: 'value', message: 'What is your input?'
    })
    return response.value
}

async function callMoreTimes() {

    let points = 0;

    for (let i = 0; i < 4; i++) {

        const answerIntAsString = bytesNBitsGame();
        console.log('answerIntAsString', answerIntAsString)
        const answerInt = parseFloat(answerIntAsString)

        console.log('answerInt', answerInt)

        const responseAsString = await theGame();
        const response = parseFloat(responseAsString)

        if (response === answerInt) {
            console.log('Great for question ', i)
            console.log('The points you have: ', points)
            points++
        }
    }
    return points
}

function startTime() {
    let start = Date.now();
    return start
};

function endTime(startTime) {
    let timeTaken = Date.now() - startTime;
    return `Total time taken : ${timeTaken} milliseconds`
};

function randomIntFromInterval() {
    return Math.floor(Math.random() * (128) + 1)
}

function randomUnit() {
    const unitArr = ['bits', 'B', 'KB', 'MB', 'GB', 'TB']
    return unitArr[Math.floor(Math.random() * unitArr.length)]
}

function calcPercent(points, numOfQuestions) {

    const percentage = (points / numOfQuestions) * 100

    const positiveArr = ['Good job!', 'Great job!', 'Fantastic!']
    const positiveComment = positiveArr[Math.floor(Math.random() * positiveArr.length)]

    const improvementArr = ['Try again!', "Don't give up!", 'More practice is key!']
    const improvementArrComment = improvementArr[Math.floor(Math.random() * improvementArr.length)]

    if (percentage >= 90) {
        return `Wow! You got ${percentage}% correct! ${positiveComment}`
    } else if (percentage >= 75) {
        return `Great! You got ${percentage}%! ${positiveComment}`
    } else if (percentage < 75) {
        return `Oh! You got ${percentage}%! You can do better! ${improvementArrComment}`
    }
}

// function theGame() {

//     // console.log(`***********************`)
//     // console.log()
//     // console.log(`    BYTES 'N BITS      `)
//     // console.log()
//     // console.log(`***********************`)

//     //const start = startTime()
//     let points = 0;
//     //const numOfQuestions = 4

//     //for (let i = 0; i < numOfQuestions; i++) {
//     for (let i = 0; i < 1; i++) {
//         console.log()
//         const answerInt = bytesNBitsGame()
//         console.log(answerInt)
//         userInput = answerInt
//         if (userInput === answerInt) {
//             points += 1

//         }
//     }
//     // console.log()
//     // console.log(`***********************`)
//     // console.log('Your Data:')
//     // console.log(endTime(start))
//     // console.log(`You earned ${points} points out of ${numOfQuestions} questions!`)
//     // console.log(calcPercent(points, numOfQuestions))
// }

// function theGame(userInput) {

//     console.log(`***********************`)
//     console.log()
//     console.log(`    BYTES 'N BITS      `)
//     console.log()
//     console.log(`***********************`)

//     const start = startTime()
//     let points = 0;
//     const numOfQuestions = 4

//     for (let i = 0; i < numOfQuestions; i++) {
//         console.log()
//         const answerInt = bytesNBitsGame()
//         console.log(answerInt)
//         userInput = answerInt
//         if (userInput === answerInt) {
//             points += 1

//         }
//     }
//     console.log()
//     console.log(`***********************`)
//     console.log('Your Data:')
//     console.log(endTime(start))
//     console.log(`You earned ${points} points out of ${numOfQuestions} questions!`)
//     console.log(calcPercent(points, numOfQuestions))
// }


callMoreTimes()

//theGame()

//**** DELETE BELOW THIS

// const val = 5
// console.log(theGame(val))
// const num = 4
// //const start = startTime()
// console.log(bytesNBitsGame(num));
//console.log(endTime(start))

// const points = 2
// const numOfQuestions = 4
// console.log(calcPercent(points, numOfQuestions))

// const val = 4
// console.log(playerInput(val))

//console.log(bytesNBits())