import readlineSync from 'readline-sync';

const numIsEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } return 'no';
};

function getRandomInt(max) {
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