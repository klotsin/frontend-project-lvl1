import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGcd(b, a % b);
};

const getResult = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const correctAnswer = (String(getGcd(number1, number2)));
  const askAQuestion = `${number1} ${number2}`;
  return [askAQuestion, correctAnswer];
};

const showTask = () => 'Find the greatest common divisor of given numbers.';

const startGameGcd = () => {
  runGameEngine(showTask, getResult);
};

export default startGameGcd;
