// notes: use parseInt
// use the loop to call prompts that many times
// understand how prompts even works!

const prompts = require('prompts');

async function theGame() {
    const response = await prompts({
        type: 'number', name: 'value', message: 'What is your input?'
    })
    console.log(response)
}

async function callMoreTimes() {
    for (let i = 0; i < 4; i++) {
        await theGame()
    }
}


callMoreTimes()

// function mainFunction() {
//     let stopped = false

//     while (!stopped) {

//         (async () => {
//             const response = await prompts({
//                 type: 'number',
//                 name: 'value',
//                 message: 'How old are you?',
//                 validate: value => value < 18 ? `Nightclub is 18+ only` : true
//             });

//             console.log(response); // => { value: 24 }
//         })();
//     }

// }

// console.log(mainFunction())


