function bytesNBitsGame(num) {

    for (let i = 0; i < 10; i++) {
        console.log(num)
    }
}






function startTime() {
    let start = Date.now();
    return start
};

function endTime(startTime) {
    let timeTaken = Date.now() - startTime;
    return `Total time taken : ${timeTaken} milliseconds`
    //    return 'Total time taken, $`timeTaken` + " milliseconds"'
};

const start = startTime();
const num = 4
bytesNBitsGame(num);
console.log(endTime(start));


