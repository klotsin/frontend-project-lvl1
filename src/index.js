import readlineSync from 'readline-sync';

const gameEngine = (gameQuestion, questionAndResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(gameQuestion);
  let stepGame = 0;
  while (stepGame < 3) {
    const QuestResult = questionAndResult();
    console.log(QuestResult[0]);
    const answerOnQuestion = readlineSync.question('Your answer: ');
    if (QuestResult[1] === answerOnQuestion) {
      console.log('Correct!');
      stepGame += 1;
    } else {
      console.log(`"${answerOnQuestion}" is wrong answer ;(. Correct answer was "${QuestResult[1]}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
