// 1.
let car = {
    color: 'black'
}

// 2.
car.color = 'green';


// 3.
car.power = function() {
    console.log('engine power');
}

// 4.
function sum(pear, apple) {
    return pear + apple;
}

// 5.
const savedName = 'Bohdan';
function hello(name) {
    if (name === savedName) {
        console.log('Hello ' + name);
    }
    else {
        console.log('there is no such name');
    }
}

// 6.
function type(arg) {
    console.log(typeof arg);
}

// 7.

function isPrime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}