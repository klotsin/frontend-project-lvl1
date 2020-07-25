import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const startGamePrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let stepGame = 1;
  while (stepGame <= 3) {
    const count = getRandomInt(21);
    console.log(`Question: ${count}`);
    const answer = readlineSync.question('Your answer: ');
    if (isPrime(count) === answer) {
      console.log('Correct!');
      stepGame += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isPrime(count)}".\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGamePrime;
