// 4) Initiate variable x as any number between 10 and 16. Using loops and conditions calculate the double factorial (see examples below or the attached link) of that number and print it.

// Example double factorials:
// 7!! = 7 * 5 * 3 * 1 = 105
// 8!! = 8 * 6 * 4 * 2 = 384
// 4!! = 4 * 2 = 8
// 3!! = 3 * 1 = 3

const x = 14;
let result = x;
for (let i = x - 2; i > 0; i -= 2) {
    result *= i;
}
console.log(result);