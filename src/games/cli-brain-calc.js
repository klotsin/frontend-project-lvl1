import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const startGameCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let stepGame = 0;
  while (stepGame < 3) {
    const char = ['+', '-', '*'];
    const number1 = getRandomInt(30);
    const number2 = getRandomInt(20);
    let answerIsCalc = 0;
    if (char[stepGame] === '+') {
      answerIsCalc = number1 + number2;
    } else if (char[stepGame] === '-') {
      answerIsCalc = number1 - number2;
    } else {
      answerIsCalc = number1 * number2;
    }
    console.log(`Question: ${number1} ${char[stepGame]} ${number2}`);
    const number = readlineSync.question('Your answer: ');
    if (String(answerIsCalc) === number) {
      console.log('Correct!');
      stepGame += 1;
    } else {
      console.log(`"${number}" is wrong answer ;(. Correct answer was "${answerIsCalc}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGameCalc;
