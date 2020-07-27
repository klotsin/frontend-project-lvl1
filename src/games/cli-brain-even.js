import gameEngine from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const numIsEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  } return 'no';
};

const calculateResult = () => {
  const array = [];
  const num = getRandomInt(100);
  const result = (numIsEven(num));
  const question = `Question: ${num}`;
  array.push(question);
  array.push(result);
  return array;
};

const startGameEven = () => {
  const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';
  gameEngine(gameQuestion, calculateResult);
};

export default startGameEven;
