import readlineSync from 'readline-sync';

const numIsEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } return 'no';
};

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
};

const isPrime = (num) => {
    for (let i = num - 1; 1 < i; i -= 1) {
        if (num % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};

export const gameNumIsEven = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const num = [10, 15, 20];
for (let i = 0; i < num.length;) {
    const answerIsEven = (numIsEven(num[i]));
    console.log(`Question: ${num[i]}`);
    const number = readlineSync.question('Your answer: ');
    if (answerIsEven === number) {
        console.log('Correct!')
        i += 1;
    } else {
        console.log(`"${number}" is wrong answer ;(. Correct answer was "${answerIsEven}".\nLet's try again, ${name}!`);
        return;
    }
}
console.log(`Congratulations, ${name}!`);
};

export const gameCalc = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
const char = ['+','-','*'];
for (let i = 0; i < char.length; ) {
    const number1 = getRandomInt(30);
    const number2 = getRandomInt(20);
    let answerIsCalc = 0;
    //const answerIsCalc = number1 + Number(char[i]) + number2;
    if (char[i] === '+') {
        answerIsCalc = number1 + number2;
    } else if (char[i] === '-') {
        answerIsCalc = number1 - number2;
    } else {
        answerIsCalc = number1 * number2;
    }
    console.log(`Question: ${number1} ${char[i]} ${number2}`);
    const number = readlineSync.question('Your answer: ');
    if (String(answerIsCalc) === number) {
        console.log('Correct!')
        i += 1;
    } else {
        console.log(`"${number}" is wrong answer ;(. Correct answer was "${answerIsCalc}".\nLet's try again, ${name}!`);
        return;
    }
}
console.log(`Congratulations, ${name}!`);
};

export const gameGcd = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
let start = 1;
let min = 0;
let num1 = 0;
let num2 = 0;
while (start <= 3) {
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    num1 = number1;
    num2 = number2;
    if (number1 <= number2) {
        min = number1;
    } else {
        min = number2;
    }
    console.log(`Question: ${num1} ${num2}`);
    const number = readlineSync.question('Your answer: ');
    let result = 1;
    for (let i = min; 1 < i; i -= 1) {
        if (num1 === num2) {
            result = num1;
            break;
        }
        else if (num1 % i === 0 && num2 % i === 0) {
                result = i;
                break;
        } 
    }
    if (String(result) === number) {
        console.log('Correct!')
        start += 1;
    } else {
        console.log(`"${number}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${name}!`);
    return;
    }
}
console.log(`Congratulations, ${name}!`);
};

export const gameProgression = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let stepGame = 1;
while (stepGame <= 3) {
    const progress = [];
    const progressNewarr = [];
    const step = getRandomInt(10);
    const countStart = getRandomInt(10);
    const char = getRandomInt(8);
    progress.push(String(countStart));
    progressNewarr.push(String(countStart));
    let stepChange = countStart;
    for (let i = 0; i < 9; i += 1) {
        stepChange += step;
        progress.push(String(stepChange));
        if(i === char) {
            progressNewarr.push('..');
        } else {
            progressNewarr.push(String(stepChange)); 
        }
    }
    console.log(`Question: ${progressNewarr[0]} ${progressNewarr[1]} ${progressNewarr[2]} ${progressNewarr[3]} ${progressNewarr[4]} ${progressNewarr[5]} ${progressNewarr[6]} ${progressNewarr[7]} ${progressNewarr[8]} ${progressNewarr[9]}`);
    const number = readlineSync.question('Your answer: ');
    if (String(number) === progress[char + 1]) {
        console.log('Correct!')
        stepGame += 1;
    } else {
        console.log(`"${number}" is wrong answer ;(. Correct answer was "${progress[char + 1]}".\nLet's try again, ${name}!`);
    return;
    }
}
};

export const gamePrime = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let stepGame = 1;
    while (stepGame <= 3) {
        const count = getRandomInt(21);
        console.log(`Question: ${count}`);
        const answer = readlineSync.question('Your answer: ');
        if (isPrime(count) === answer) {
            console.log('Correct!')
            stepGame += 1;
        } else {
            console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrime(count)}".\nLet's try again, ${name}!`);
        return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};