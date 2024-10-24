// /// 2) Initiate a variable answer as 0. Then iterate through numbers between 1 and 100: 
// If the number is divisible by 5, add it to the answer
// If the number is divisible by 7, subtract it from the answer
// If the number is divisible by both, don't change the sum. Instead, print "I don't know what to dooo!!!".
// Print the answer after all iterations. 

let answer = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 7 === 0) {
        console.log("I don't know what to dooo!!!");
    } else if (i % 5 === 0) {
        answer += i;
    } else if (i % 7 === 0) {
        answer -= i;
    }
}

console.log(answer);