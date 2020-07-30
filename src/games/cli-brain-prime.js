import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getResult = () => {
  const numberForCalc = getRandomInt(0, 21);
  let correctAnswer = 'yes';
  for (let i = numberForCalc - 1; i > 1; i -= 1) {
    if (numberForCalc % i === 0) {
      correctAnswer = 'no';
    }
  }
  const askAQuestion = numberForCalc;
  return [askAQuestion, correctAnswer];
};

const showTask = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGamePrime = () => {
  runGameEngine(showTask, getResult);
};

export default startGamePrime;
