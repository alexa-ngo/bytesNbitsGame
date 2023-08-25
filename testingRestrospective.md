# Retrospective for Testing

I experienced a few challenges for testing random functions since the values were constantly changing. Here were the main functions I used to help me test! 

- mockImplementation()
- mockFn.mockReset()
- mockFn.mockRestore()
- jest.spyOn(global.Math, "random")
- expect.assertion()

## mockImplementation()

The implementation will be executed when the mock is called.

This is an example of using mockImplemtation() to set a timer.

```    
    it("Returns the start time to be 33.", () => {
            const playerInput = jest.spyOn(practiceLib, "startTimer");
            playerInput.mockImplementation(() => '33');
            const result = practiceLib.startTimer();
            expect(result).toBe('33');
    });    
```

## mockFn.mockReset()
mockFn.mockReset() replaces the mock implementation with an empty function, returning undefined.

```
    afterEach(() => {
        jest.resetAllMocks();
    });
```

## mockFn.mockRestore()

Does everything that mockFn.mockReset() does, and also restores the original (non-mocked) implementation.

```
describe("This tests x function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("x.", () => {
        //
    });
});
```

## Random Generator

This tests the random function of the Math library.

```
    it("Returns 1.", () => {
        jest.spyOn(global.Math, "random").mockReturnValue(0);
        const result = mathLib.generateRandomInt();
        expect(result).toBe("1")
    });
```

# Async and Await

First take a look at the getUserInput() function. There are a few things happening here!

1. prompts
2. async and await
3. assertions
4. values


```
async function getUserInput() {
    const response = await prompts.prompt({
        type: 'text', name: 'value', message: 'What is your input?'
    });
    return response.value;
}
```

Notice how this is an async function. We have to treat the test differently and we have to use away in the line of 
```
const result = await mathLib.getUserInput()
```


```
describe("This tests getUserInput() function: ", () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it("Returns 891 as the input.", async () => {
        expect.assertions(1);

        jest.spyOn(prompts, "prompt").mockResolvedValue({ value: 891 });
        const result = await mathLib.getUserInput();
        console.log('this is the result', result);
        expect(result).toBe(891)
    });
});
```

## Prompts

We're asking the user for their response so we have to use: 

```
jest.spyOn(prompts, "prompt").mockResolvedValue({ value: 891 });
```

## Assertions

We have to let the computer know to expect only one assertion which is why we have the line of:

```
expect.assertions(1);
```

## Async and await

We have to use await when we are using getUserInput() because the function is async.

```
const result = await mathLib.getUserInput();
```

## Values
```
jest.spyOn(prompts, "prompt").mockResolvedValue({ value: 891 });
```

- Why do we see value attribute? This is because in the function of getUserInput(), the message the user is inputting is called value.
