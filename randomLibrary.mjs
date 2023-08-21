export function generateRandomInt() {
    return Math.floor(Math.random() * (128) + 1)
}

export function generateRandomUnit() {
    const unitArr = ['bits', 'B', 'KB', 'MB', 'GB', 'TB']
    return unitArr[Math.floor(Math.random() * unitArr.length)]
}

export function sizeGenerator() {
    const unitArr = ["0", "1"]
    const inputUnit = unitArr[Math.floor(Math.random() * unitArr.length)]
    return inputUnit
}