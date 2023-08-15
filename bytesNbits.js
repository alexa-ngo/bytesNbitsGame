function bytesNBitsGame(numOfQuestions) {

    const start = startTime()

    let score = 0;
    let answerInt = 0;
    let inputUnit = null;

    // Generate integer between 1-128
    const randomInt = randomIntFromInterval()

    // Generate a random question unit: Bits, B, KB, MB, GB, TB

    for (let i = 1; i < 4; i++) {
        const unit = randomUnit();
        //console.log(i, unit)

        if (unit === 'bits') {
            inputUnit = 'B';
            answerInt = randomInt / 8
            return unit, inputUnit

        } else if (unit === 'TB') {

            inputUnit = 'GB';
            return unit, inputUnit
        } else if (unit === 'KB') {

            inputUnit = 'B'
            // const unitArr = ['B', 'MB']
            //return unitArr[Math.floor(Math.random() * unitArr.length)]
            return unit, inputUnit
        } else if (unit === 'MB') {
            inputUnit = 'KB'
            return unit, inputUnit

        } else if (unit === 'GB') {
            inputUnit = 'MB'
            return unit, inputUnit
        }

    }
    console.log(endTime(start))
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
};

//console.log(randomUnit())


const num = 4
console.log(bytesNBitsGame(num));


