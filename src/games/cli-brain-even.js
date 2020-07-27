//import readlineSync from 'readline-sync';
import gameEngine from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const numIsEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};
const randomNum = () => getRandomInt(100);

/*
const startGameEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let stepGame = 0;
  while (stepGame < 3) {
    const num = [10, 15, 20];
    for (let i = 0; i < num.length;) {
      const result = (numIsEven(num[i]));
      console.log(`Question: ${num[i]}`);
      const answerOnQuestion = readlineSync.question('Your answer: ');
      if (result === answerOnQuestion) {
        console.log('Correct!');
        i += 1;
        stepGame += 1;
      } else {
        console.log(`"${answerOnQuestion}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${name}!`);
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGameEven;
*/

const startGameEven = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  const count = randomNum();
  const result = (numIsEven(count));
  const question = `Question: ${count}`;
  gameEngine(result, gameQuestion, question);
};

export default startGameEven;
