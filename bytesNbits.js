function bytesNBitsGame(numOfQuestions) {

    // Starts the timer
    const start = startTime()

    let answerInt = 0;
    let inputUnit = null;

    // Generate integer between 1-128
    const randomInt = randomIntFromInterval()

    for (let i = 0; i < 10; i++) {

        // Generates random unit
        const unit = randomUnit();

        if (unit === 'bits') {
            inputUnit = 'B';
            answerInt = randomInt / 8

        } else if (unit === 'TB') {
            inputUnit = 'GB';
            answerInt = randomInt * 1000

        } else if (unit === 'KB') {

            const unitArr = ['B', 'MB']
            inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]

            if (inputUnit === 'B') {
                answerInt = randomInt * 1000
            } else {
                answerInt = randomInt / 1000
            }

        } else if (unit === 'MB') {

            const unitArr = ['KB', 'GB']
            inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]

            if (inputUnit === 'KB') {
                answerInt = randomInt * 1000
            } else {
                answerInt = randomInt / 1000
            }


        } else if (unit === 'GB') {

            const unitArr = ['MB', 'TB']
            inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]

            if (inputUnit === 'MB') {
                answerInt = randomInt * 1000
            } else {
                answerInt = randomInt / 1000
            }
        }
    }

    // Ends the timer
    console.log(endTime(start))
    return answerInt

}

function startTime() {
    let start = Date.now();
    // for (let i = 0; i < 1000; i++) {
    //     console.log('hi')
    // }
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
};

function playerInput(val) {

    let points = 0;
    // Hardcoding the answerInt to simulate the input number
    // const answerInt = bytesNBitsGame(4);
    const answerInt = 4
    if (val === answerInt) {
        points += 1
    }
    return points;
};


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
};



const num = 4
console.log(bytesNBitsGame(num));

// const points = 2
// const numOfQuestions = 4
// console.log(calcPercent(points, numOfQuestions))

// const val = 4
// console.log(playerInput(val))

//console.log(bytesNBits())