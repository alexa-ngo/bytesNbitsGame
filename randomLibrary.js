const prompts = require('prompts');

function generateRandomInt() {
    return (Math.floor(Math.random() * (128) + 1)).toString();
}

function generateRandomUnit() {
    const unitArr = ['bits', 'B', 'KB', 'MB', 'GB', 'TB'];
    return unitArr[Math.floor(Math.random() * unitArr.length)];
}

function sizeGenerator() {
    const unitArr = ["0", "1"];
    const inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)];
    return inputUnit;
}

function positiveGenerator() {
    const positiveArr = ['Good job!', 'Great job!', 'Fantastic!'];
    const positiveComment = positiveArr[Math.floor(Math.random() * positiveArr.length)];
    return positiveComment;
}

function improvementGenerator() {
    const improvementArr = ['Try again!', "Don't give up!", 'More practice is key!'];
    const improvementArrComment = improvementArr[Math.floor(Math.random() * improvementArr.length)];
    return improvementArrComment;
}

function startTimer() {
    return Date.now();
}

async function getUserInput() {
    const response = await prompts({
        type: 'text', name: 'value', message: 'What is your input?'
    });
    return response.value;
}

module.exports = {
    generateRandomInt,
    generateRandomUnit,
    sizeGenerator,
    positiveGenerator,
    improvementGenerator,
    startTimer,
    getUserInput
};