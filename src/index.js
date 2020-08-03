import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const runGameEngine = (task, genQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(task);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, correctAnswer] = genQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answerOnQuestion = readlineSync.question('Your answer: ');
    if (correctAnswer === answerOnQuestion) {
      console.log('Correct!');
    } else {
      console.log(`"${answerOnQuestion}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;
