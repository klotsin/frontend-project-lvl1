import readlineSync from 'readline-sync';

const runGameEngine = (task, questionAndResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(task());
  for (let i = 0; i < 3;) {
    const [askAQuestion, correctAnswer] = questionAndResult();
    console.log(`Question: ${askAQuestion}`);
    const answerOnQuestion = readlineSync.question('Your answer: ');
    if (correctAnswer === answerOnQuestion) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${answerOnQuestion}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runGameEngine;
