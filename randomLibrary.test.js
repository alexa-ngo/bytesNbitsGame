const mathLib = require("./randomLibrary.js");

describe("This tests the Math.random in the generateRandomInt function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns 1.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0);
        const result = mathLib.generateRandomInt();
        expect(result).toBe("1")
    });

    it("Returns 33.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.25);
        const result = mathLib.generateRandomInt();
        expect(result).toBe("33");
    });

    it("Returns 128.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0);
        const result = mathLib.generateRandomInt();
        expect(result).toBe("1")
    });

    it("Returns 12800001.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(100000);
        const result = mathLib.generateRandomInt();
        expect(result).toBe("12800001");
    });
});

describe("This tests the unitArr containing bits, B, KB, MB, GB, and TB in generateRandomUnit function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns bits.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.005);
        const result = mathLib.generateRandomUnit();
        expect(result).toBe("bits");
    });

    it("Returns B.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.25);
        const result = mathLib.generateRandomUnit();
        expect(result).toBe("B");
    });

    it("Returns KB.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.415);
        const result = mathLib.generateRandomUnit();
        expect(result).toBe("KB");
    });

    it("Returns MB.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.525);
        const result = mathLib.generateRandomUnit();
        expect(result).toBe("MB");
    });

    it("Returns GB.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.77);
        const result = mathLib.generateRandomUnit();
        expect(result).toBe("GB");
    });

    it("Returns TB.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.99925);
        const result = mathLib.generateRandomUnit();
        expect(result).toBe("TB");
    });
});

describe("This tests the unitArr containing 0 and 1 in the sizeGenerator function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns 0.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.079);
        const result = mathLib.sizeGenerator();
        expect(result).toBe("0");
    });

    it("Returns 1.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.599);
        const result = mathLib.sizeGenerator();
        expect(result).toBe("1");
    });
});

describe("This tests the positiveArr containing Good job!, Great job!, and Fantastic! in the positiveGenerator() function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns Good job!", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.179);
        const result = mathLib.positiveGenerator();
        expect(result).toBe("Good job!");
    });

    it("Returns Great job!", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.58);
        const result = mathLib.positiveGenerator();
        expect(result).toBe("Great job!");
    });

    it("Returns Fantastic!", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.91);
        const result = mathLib.positiveGenerator();
        expect(result).toBe("Fantastic!");
    });
});


describe("This tests the improvementArr containing Try again!, Don't give up!, and More practice is key! in the improvementGenerator() function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns Try again!", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.019);
        const result = mathLib.improvementGenerator();
        expect(result).toBe("Try again!");
    });

    it("Returns Don't give up!", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.58);
        const result = mathLib.improvementGenerator();
        expect(result).toBe("Don't give up!");
    });

    it("Returns More practice is key!", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0.79);
        const result = mathLib.improvementGenerator();
        expect(result).toBe("More practice is key!");
    });
});

describe("This tests startTimer() function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns 1487076708000 as the current time.", () => {
        jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000);
        const result = mathLib.startTimer();
        expect(result).toBe(1487076708000);
    });
});

describe("This tests getUserInput() function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns 0891 as the input.", () => {
        const prompt = new prompt();
        // const onChange = jest.fn();

        //jest.spyOn(window, "prompts").mockImplementation(() => "0891");
        //jest.spyOn(Date, 'now').mockImplementation(() => 1487076708000)
        //const result = mathLib.getUserInput();
        expect(prompt).toBe("0891");
    });
});