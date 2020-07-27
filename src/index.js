import readlineSync from 'readline-sync';

const gameEngine = (result, gameQuestion, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  let stepGame = 0;
  while (stepGame < 3) {
    console.log(question);
    const answerOnQuestion = readlineSync.question('Your answer: ');
    if (result === answerOnQuestion) {
      console.log('Correct!');
      stepGame += 1;
    } else {
      console.log(`"${answerOnQuestion}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
