function bytesNBitsGame(numOfQuestions) {

    const start = startTime()

    let score = 0;
    let answerInt = 0;
    let inputUnit = null;

    // Generate integer between 1-128
    const randomInt = randomIntFromInterval()

    // Generate a random question unit: Bits, B, KB, MB, GB, TB

    for (let i = 0; i < 10; i++) {

        const unit = randomUnit();


        if (unit === 'bits') {
            inputUnit = 'B';
            answerInt = randomInt / 8
            return `${unit} ">" ${inputUnit}`

        } else if (unit === 'TB') {

            inputUnit = 'GB';
            return `${unit} ">" ${inputUnit}`
        } else if (unit === 'KB') {

            const unitArr = ['B', 'MB']
            inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]
            return `${unit} ">" ${inputUnit}`

        } else if (unit === 'MB') {

            const unitArr = ['KB', 'GB']
            inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]
            return `${unit} ">" ${inputUnit}`

        } else if (unit === 'GB') {

            const unitArr = ['MB', 'TB']
            inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]
            return `${unit} ">" ${inputUnit}`
        }

    }
    // console.log(endTime(start))
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


