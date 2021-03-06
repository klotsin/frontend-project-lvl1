import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const genQuestionAndAnswer = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const correctAnswer = (String(getGcd(number1, number2)));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};

const task = 'Find the greatest common divisor of given numbers.';

const startGameGcd = () => {
  runGameEngine(task, genQuestionAndAnswer);
};

export default startGameGcd;
