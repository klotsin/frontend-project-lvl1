import gameEngine from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const isPrime = (num) => {
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const calculateResult = () => {
  const array = [];
  const count = getRandomInt(21);
  const result = (isPrime(count));
  const question = `Question: ${count}`;
  array.push(question);
  array.push(result);
  return array;
};

const startGamePrime = () => {
  const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  gameEngine(gameQuestion, calculateResult);
};

export default startGamePrime;
