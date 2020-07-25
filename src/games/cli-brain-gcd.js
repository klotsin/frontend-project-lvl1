import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const startGameGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let stepGame = 0;
  while (stepGame < 3) {
    let min = 0;
    const number1 = getRandomInt(100);
    const number2 = getRandomInt(100);
    if (number1 <= number2) {
      min = number1;
    } else {
      min = number2;
    }
    console.log(`Question: ${number1} ${number2}`);
    const number = readlineSync.question('Your answer: ');
    let result = 1;
    for (let i = min; i > 1; i -= 1) {
      if (number1 === number2) {
        result = number1;
        break;
      } else if (number1 % i === 0 && number2 % i === 0) {
        result = i;
        break;
      }
    }
    if (String(result) === number) {
      console.log('Correct!');
      stepGame += 1;
    } else {
      console.log(`"${number}" is wrong answer ;(. Correct answer was "${result}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGameGcd;
