import readlineSync from 'readline-sync';

const numIsEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } return 'no';
};

const getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
}



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