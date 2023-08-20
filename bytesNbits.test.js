import { prompts } from "prompts";
import { bytesNBitsGame, calcPercent } from "./bytesNbits";

// it('tests', () => {
//     const points = 4
//     const numberOfQuestions = 4
//     const result = calcPercent(points, numberOfQuestions)
//     expect(result).toBe("Wow! You got 100% correct! Fantastic!")
// });

// it('tests', () => {
//     const positiveArr = 'Good job!'
//     const points = 3
//     const numberOfQuestions = 4
//     const result = calcPercent(points, numberOfQuestions)
//     expect(result).toBe("Great! You got 75%! Fantastic!")
// });



var mockResult = { value: 8 };
jest.mock("prompts", () => {
    return () => {
        return mockResult
    }
});

describe("", () => {
    it("", () => {
        mockResult.value = 41;

        // adfjklad; sfja
        // SVGDefsElementasdf
        // asdf
        bytesNBitsGame()
    });
});

// export function calcPercent(points, numOfQuestions) {

//     const percentage = (points / numOfQuestions) * 100

//     const positiveArr = ['Good job!', 'Great job!', 'Fantastic!']
//     const positiveComment = positiveArr[Math.floor(Math.random() * positiveArr.length)]

//     const improvementArr = ['Try again!', "Don't give up!", 'More practice is key!']
//     const improvementArrComment = improvementArr[Math.floor(Math.random() * improvementArr.length)]

//     if (percentage >= 90) {
//         return `Wow! You got ${percentage}% correct! ${positiveComment}`
//     } else if (percentage >= 75) {
//         return `Great! You got ${percentage}%! ${positiveComment}`
//     } else if (percentage < 75) {
//         return `Oh! You got ${percentage}%! You can do better! ${improvementArrComment}`
//     }
// }
