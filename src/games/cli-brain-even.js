import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } return false;
};

const genQuestionAndAnswer = () => {
  const number = getRandomInt(0, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = String(number);
  return [question, correctAnswer];
};

const showTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  runGameEngine(showTask, genQuestionAndAnswer);
};

export default startGameEven;
