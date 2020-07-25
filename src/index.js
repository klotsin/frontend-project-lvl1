import readlineSync from 'readline-sync';

const gameEngine = () => {
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

export default gameEngine;