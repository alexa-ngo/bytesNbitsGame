const { calcPercent, letsPlay } = require("./bytesNbits.js");
const { bytesNBitsGame } = require("./bytesNbits.js");
const practiceLib = require("./randomLibrary.js");

jest.mock('./randomLibrary.js', () => ({
    generateRandomInt: jest.fn(),
    generateRandomUnit: jest.fn(),
    sizeGenerator: jest.fn(),
    positiveGenerator: jest.fn(),
    improvementGenerator: jest.fn(),
    startTimer: jest.fn(),
    getUserInput: jest.fn()
}));

describe("This tests the calculatePercent function: ", () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("Gives a `Wow! You got 100% correct! Good job` as a comment.", () => {

        const points = 4;
        const numOfQuestions = 4;

        const pGenerator = jest.spyOn(practiceLib, "positiveGenerator");
        pGenerator.mockImplementation(() => 'Good job');

        practiceLib.positiveGenerator();

        const iGenerator = jest.spyOn(practiceLib, "improvementGenerator");
        iGenerator.mockImplementation(() => 'Try again');

        practiceLib.improvementGenerator();

        const result = calcPercent(points, numOfQuestions);

        expect(result).toBe("Wow! You got 100% correct! Good job");
    });


    it("Gives a 75% score with 'Great job!' as a comment.", () => {

        const points = 3;
        const numOfQuestions = 4;

        const pGenerator = jest.spyOn(practiceLib, "positiveGenerator");
        pGenerator.mockImplementation(() => 'Great job');

        practiceLib.positiveGenerator();

        const iGenerator = jest.spyOn(practiceLib, "improvementGenerator");
        iGenerator.mockImplementation(() => "Don't give up!");

        practiceLib.improvementGenerator();

        const result = calcPercent(points, numOfQuestions);

        expect(result).toBe("Great! You got 75%! Great job");
    });

    it("Returns a 'Oh! You got 10%! You can do better! Don't give up!' as a comment.", () => {

        const points = 1;
        const numOfQuestions = 10;

        const pGenerator = jest.spyOn(practiceLib, "positiveGenerator");
        pGenerator.mockImplementation(() => 'Great job');

        practiceLib.positiveGenerator();

        const iGenerator = jest.spyOn(practiceLib, "improvementGenerator");
        iGenerator.mockImplementation(() => "Don't give up!");

        practiceLib.improvementGenerator();

        const result = calcPercent(points, numOfQuestions);

        expect(result).toBe(`Oh! You got 10%! You can do better! Don't give up!`);
    });


    it("Returns a 'Oh! You got 0%! You can do better! More practice is key!' as a comment.", () => {

        const points = 0;
        const numOfQuestions = 10;

        const pGenerator = jest.spyOn(practiceLib, "positiveGenerator");
        pGenerator.mockImplementation(() => 'Great job');

        practiceLib.positiveGenerator();

        const iGenerator = jest.spyOn(practiceLib, "improvementGenerator");
        iGenerator.mockImplementation(() => 'More practice is key!');

        practiceLib.improvementGenerator();

        const result = calcPercent(points, numOfQuestions);

        expect(result).toBe(`Oh! You got 0%! You can do better! More practice is key!`);
    });
});

describe("This tests the StartTimer function: ", () => {

    it("Returns the start time to be 33.", () => {
        const playerInput = jest.spyOn(practiceLib, "startTimer");
        playerInput.mockImplementation(() => '33');
        const result = practiceLib.startTimer();
        expect(result).toBe('33');
    });

    it("Returns the start time to be 98.", () => {
        const playerInput = jest.spyOn(practiceLib, "startTimer");
        playerInput.mockImplementation(() => '98');
        const result = practiceLib.startTimer();
        expect(result).toBe('98');
    });
});

describe("This tests the generateRandomInt function", () => {
    it("Returns 3 as a mockedImplementation integer", () => {
        const randInt = jest.spyOn(practiceLib, "generateRandomInt");
        randInt.mockImplementation(() => 3);
        const result = practiceLib.generateRandomInt();
        expect(result).toBe(3);
    });
});

describe("This tests the generateRandomUnit function", () => {
    it("Returns KB as a mockedImplementation unit", () => {
        const randUnit = jest.spyOn(practiceLib, "generateRandomUnit");
        randUnit.mockImplementation(() => 'KB');
        const result = practiceLib.generateRandomUnit();
        expect(result).toBe('KB');
    });
});

describe("This tests the zero and one in the sizeGenerator function", () => {
    it("Returns 0 from the sizeGenerator function", () => {
        const zeroReturned = jest.spyOn(practiceLib, "sizeGenerator");
        zeroReturned.mockImplementation(() => "0");
        const result = practiceLib.sizeGenerator();
        expect(result).toBe("0");
    });

    it("Returns 1 from the sizeGenerator function", () => {
        const zeroReturned = jest.spyOn(practiceLib, "sizeGenerator");
        zeroReturned.mockImplementation(() => "1");
        const result = practiceLib.sizeGenerator();
        expect(result).toBe("1");
    });
});

describe("This tests the bytesNBitsGame function", () => {

    it("Returns 0 points when the input is incorrect", async () => {
        expect.assertions(1);

        const randomInt = 88;
        const randomUnit = 'bits';
        const zeroOrOne = '1';
        bytesNBitsGame(randomInt, randomUnit, zeroOrOne);

        const responseAsString = jest.spyOn(practiceLib, "getUserInput");
        responseAsString.mockImplementation(() => "0.99");
        practiceLib.getUserInput();

        const numberOfQuestions = 1;
        const result = await letsPlay(numberOfQuestions);

        expect(result).toBe(0);
    })

    it("Returns 1 point when the input is correct", async () => {
        expect.assertions(1);

        const randomInt = 88;
        const randomUnit = 'bits';
        const zeroOrOne = '1';
        bytesNBitsGame(randomInt, randomUnit, zeroOrOne);

        const responseAsString = jest.spyOn(practiceLib, "getUserInput");
        responseAsString.mockImplementation(() => "0.003");
        practiceLib.getUserInput();

        const numberOfQuestions = 1;
        const result = await letsPlay(numberOfQuestions);

        expect(result).toBe(1);
    })

});

describe("This tests the bytesNBitsGame function: ", () => {

    it('Returns "11" when randomInt = 88 and randomUnit = "bits"', () => {
        const randomInt = 88;
        const randomUnit = 'bits';
        const zeroOrOne = '1';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("11");
    });

    it('Returns "1000" when randomInt = 1 and randomUnit = "TB"', () => {
        const randomInt = 1;
        const randomUnit = 'TB';
        const zeroOrOne = '1';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("1000");
    });

    it('Returns "0.056" when randomInt = 56 and randomUnit = "B" and converting to "MB" ', () => {
        const randomInt = 56;
        const randomUnit = 'B';
        const zeroOrOne = '1';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("0.056");
    });

    it('Returns "64" when randomInt = 8 and randomUnit = "B" and converting to "bits"', () => {
        const randomInt = 8;
        const randomUnit = 'B';
        const zeroOrOne = '0';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("64");
    });

    it('Returns "0.045" when randomInt = 45 and randomUnit = "MB" and converting to "KB" ', () => {
        const randomInt = 45;
        const randomUnit = 'MB';
        const zeroOrOne = '1';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("0.045");
    });

    it('Returns "0.045" when randomInt = 45 and randomUnit = "MB" and converting to "B" ', () => {
        const randomInt = 45;
        const randomUnit = 'MB';
        const zeroOrOne = '0';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("45000");
    });

    it('Returns "128000" when randInt = 128 and randomUnit = "KB" and converting to "MB" ', () => {
        const randomInt = 128;
        const randomUnit = 'KB';
        const zeroOrOne = '0';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("128000");
    });

    it('Returns "0.001" when randInt = 1 and randomUnit = "KB" and converting to "GB" ', () => {
        const randomInt = 1;
        const randomUnit = 'KB';
        const zeroOrOne = '1';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("0.001");
    });

    it('Returns "118000" when randInt = 118 and randomUnit = "GB" and converting to "MB" ', () => {
        const randomInt = 118;
        const randomUnit = 'GB';
        const zeroOrOne = '0';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("118000");
    });

    it('Returns "0.049" when randInt = 49 and randomUnit = "GB" and converting "TB" ', () => {
        const randomInt = 49;
        const randomUnit = 'GB';
        const zeroOrOne = '1';
        const results = bytesNBitsGame(randomInt, randomUnit, zeroOrOne);
        expect(results).toEqual("0.049");
    });
});
