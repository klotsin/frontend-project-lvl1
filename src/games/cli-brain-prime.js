import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const genQuestionAndAnswer = () => {
  const number = getRandomInt(0, 21);
  const correctAnswer = isPrime(number);
  const question = String(number);
  return [question, correctAnswer];
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGamePrime = () => {
  runGameEngine(task, genQuestionAndAnswer);
};

export default startGamePrime;
