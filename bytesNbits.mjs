
import { generateRandomInt, generateRandomUnit, sizeGenerator } from './randomLibrary.mjs';
import prompts from 'prompts';
//const prompts = require('prompts');

function bytesNBitsGame(randomInt, unit, zeroOrOne) {

    // The calculated answer integer. The player will earn one point if they respond with this answer
    let answerInt = 0;

    // Assigns the unit for the player to convert to
    let inputUnit = zeroOrOne;

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

    } else if (unit === 'B') {

        if (inputUnit === '0') {   // was bits
            answerInt = randomInt * 8
            console.log(`____ bits = ${randomInt} B`)
            return `${answerInt}`
        } else {
            answerInt = randomInt / 1000
            console.log(`____ MB = ${randomInt} B`)
            return `${answerInt}`
        }

    } else if (unit === 'KB') {

        if (inputUnit === '0') {                        // was B
            answerInt = randomInt * 1000
            console.log(`____ B = ${randomInt} KB`)
            return `${answerInt}`
        } else {
            answerInt = randomInt / 1000
            console.log(`____ MB = ${randomInt} KB`)
            return `${answerInt}`
        }

    } else if (unit === 'MB') {

        if (inputUnit === '0') {                       // was KB
            answerInt = randomInt * 1000
            console.log(`____ KB = ${randomInt} MB`)
            return `${answerInt}`
        } else {
            answerInt = randomInt / 1000
            console.log(`____ GB = ${randomInt} MB`)
            return `${answerInt}`
        }

    } else if (unit === 'GB') {

        if (inputUnit === '0') {
            answerInt = randomInt * 1000
            console.log(`____ MB = ${randomInt} GB`)
            return `${answerInt}`
        } else {
            answerInt = randomInt / 1000
            console.log(`____ TB = ${randomInt} GB`)
            return `${answerInt}`
        }
    }
}

async function theGame() {
    const response = await prompts({
        type: 'text', name: 'value', message: 'What is your input?'
    })
    return response.value
}

async function letsPlay(numOfQuestions) {

    console.log(`****************************************************************`)
    console.log()
    console.log(`                         BYTES 'N BITS                          `)
    console.log()
    console.log(`****************************************************************`)

    // Starts the timer for the game
    const start = Date.now();

    // Tracks the number of points a player has earned
    let points = 0;

    for (let i = 1; i < numOfQuestions + 1; i++) {

        console.log()
        console.log()
        console.log(`Question #`, i)
        console.log()
        const randomInt = generateRandomInt()
        const randomUnit = generateRandomUnit()
        const zeroOrOne = sizeGenerator()
        const answerIntAsString = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
        const answerInt = parseFloat(answerIntAsString)
        console.log()
        console.log(answerInt)

        const responseAsString = await theGame();
        const response = parseFloat(responseAsString)

        if (response === answerInt) {
            points++
        }
    }
    console.log()
    console.log(`****************************************************************`)
    console.log(`************************** YOUR STATS **************************`)
    console.log()

    //Calcualtes the percent correct
    const calcPer = calcPercent(points, numOfQuestions)
    console.log(calcPer)

    // Ends the timer for the game
    let timeTaken = ((Date.now() - start) / 1000).toFixed(2);

    console.log(`Total time taken : ${timeTaken} seconds`)
    console.log()
    console.log(`You earned ${points} points out of ${numOfQuestions} questions!`)
    console.log()
    console.log(`****************************************************************`)
}


// Function calcuates the percentage of correct answers
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


const numOfQuestions = 10
letsPlay(numOfQuestions)