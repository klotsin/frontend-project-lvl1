import readlineSync from 'readline-sync';

const numIsEven = (num) => {
    if (num % 2 === 0) {
        return 'yes';
    } return 'no';
};

const gameNumIsEven = () => {
const name = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const num = [10, 15, 20];
for (let i = 0; i < num.length;) {
    const answerIsEven = (numIsEven(num[i]));
    console.log(`${num[i]}`);
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

export default gameNumIsEven;
