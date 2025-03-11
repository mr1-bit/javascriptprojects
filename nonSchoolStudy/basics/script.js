// import { cases } from './scipt2.js'
// console.log(cases.length)

function calculate() {

    let total = 0;

    const cases = [1, 2, 3, 4, 5];

    for (let i = 0; i < cases.length; i++){
    total += cases[i];
    }

    return console.log(total);
}
calculate();

// setTimeout(() => {
   //async code
// }, timeout);


// works the same way as the a regualr function
// but it is faster to code i guess lol
// can also do a few unique things
//brackets are optional if there is only one paramiter

const arf = (param) => {
    //arrow function
    console.log(param + 1);
}

// one liner
const online = (param) => console.log(param + 1);
let total = 0;
const todo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((num) => {total += num ; return total});

console.log(total);


const object2 = {
    method: () => {
        console.log(this);
    }
};

console.log([1, -3, 5].filter((Value, i) =>{

    // if (value >= 0) return true;
    // else return false;
    return value >= 0;;
    }))

// makes a new array whatever we rertun added to new array
//transforms array into other array
[1, 1, 3].map((value, i) => {
    return value * 2;
});
//shortcut
[1, 1, 3].map(value => value * 2); 

//fyi: closure = if a fuction has a value it will always have that value gets enclosed in the function


