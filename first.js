/// 1) Print all numbers between 42 and 173 that are divisible by 13, but not by 6. 

for (let i = 42; i <=173; i++) {
    if(i % 13 === 0 && i % 6 !== 0) {
        console.log(i);
    }
}

