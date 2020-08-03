import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const genQuestionAndAnswer = () => {
  const number = getRandomInt(0, 100);
  const correctAnswer = isEven(number);
  const question = String(number);
  return [question, correctAnswer];
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGameEven = () => {
  runGameEngine(task, genQuestionAndAnswer);
};

export default startGameEven;
