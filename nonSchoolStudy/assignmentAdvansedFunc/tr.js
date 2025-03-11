

let multiply = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiply(10, 7));


let countPositives = (arr) => {
    let count = 0
    arr.forEach((num) => {
        if (num >= 0) count++;
    });
    return console.log(count);
    
}
countPositives([1, -3, 5]);
countPositives([-1, -3, -5, 7, 8, -9, 10]);