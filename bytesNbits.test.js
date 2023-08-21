import { prompts } from "prompts";
import { bytesNBitsGame, letsPlay } from "./bytesNbits";



// it.skip('', () => {
//     // const randomInt = 1
//     // const randomUnit = ''
//     // const zeroOrOne = '1'
//     const results = letsPlay(5)
//     expect(results).toBe("")
// })

var mockResult = { value: 8 };
jest.mock("prompts", () => {
    return () => {
        return mockResult
    }
});

describe("", () => {
    it("Hi, this is the value", () => {
        mockResult.value = 41;

        // adfjklad; sfja
        // SVGDefsElementasdf
        // asdf
        console.log(mockResult.value)
        console.log(bytesNBitsGame())
    });
});

// it('Returns "11" when randomInt = 88 and randomUnit = "bits"', () => {
//     const randomInt = 88
//     const randomUnit = 'bits'
//     const results = bytesNBitsGame(randomInt, randomUnit)
//     expect(results).toEqual("11")
// })

// it('Returns "1000" when randomInt = 1 and randomUnit = "TB"', () => {
//     const randomInt = 1
//     const randomUnit = 'TB'
//     const results = bytesNBitsGame(randomInt, randomUnit)
//     expect(results).toEqual("1000")
// })

// it('Returns "0.056" when randomInt = 56 and randomUnit = "B" and converting to "MB" ', () => {
//     const randomInt = 56
//     const randomUnit = 'B'
//     const zeroOrOne = '1'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("0.056")
// })

// it('Returns "64" when randomInt = 8 and randomUnit = "B" and converting to "bits"', () => {
//     const randomInt = 8
//     const randomUnit = 'B'
//     const zeroOrOne = '0'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("64")
// })

// it('Returns "0.045" when randomInt = 45 and randomUnit = "MB" and converting to "KB" ', () => {
//     const randomInt = 45
//     const randomUnit = 'MB'
//     const zeroOrOne = '1'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("0.045")
// })

// it('Returns "0.045" when randomInt = 45 and randomUnit = "MB" and converting to "B" ', () => {
//     const randomInt = 45
//     const randomUnit = 'MB'
//     const zeroOrOne = '0'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("45000")
// })

// it('Returns "128000" when randInt = 128 and randomUnit = "KB" and converting to "MB" ', () => {
//     const randomInt = 128
//     const randomUnit = 'KB'
//     const zeroOrOne = '0'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("128000")
// })

// it('Returns "0.001" when randInt = 1 and randomUnit = "KB" and converting to "GB" ', () => {
//     const randomInt = 1
//     const randomUnit = 'KB'
//     const zeroOrOne = '1'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("0.001")
// })

// it('Returns "118000" when randInt = 118 and randomUnit = "GB" and converting to "MB" ', () => {
//     const randomInt = 118
//     const randomUnit = 'GB'
//     const zeroOrOne = '0'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("118000")
// })

// it('Returns "0.049" when randInt = 49 and randomUnit = "GB" and converting "TB" ', () => {
//     const randomInt = 49
//     const randomUnit = 'GB'
//     const zeroOrOne = '1'
//     const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne)
//     expect(results).toEqual("0.049")
// })