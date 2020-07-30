import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getResult = () => {
  const numberForCalc = getRandomInt(0, 100);
  const correctAnswer = (numberForCalc % 2 === 0) ? 'yes' : 'no';
  const askAQuestion = numberForCalc;
  return [askAQuestion, correctAnswer];
};

const showTask = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  runGameEngine(showTask, getResult);
};

export default startGameEven;
