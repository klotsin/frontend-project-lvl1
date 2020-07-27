import gameEngine from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const calculateResult = () => {
  const array = [];
  let min = 0;
  const number1 = getRandomInt(100);
  const number2 = getRandomInt(100);
  if (number1 <= number2) {
    min = number1;
  } else {
    min = number2;
  }
  let resultNumber = 1;
  for (let i = min; i > 1; i -= 1) {
    if (number1 === number2) {
      resultNumber = number1;
      break;
    } else if (number1 % i === 0 && number2 % i === 0) {
      resultNumber = i;
      break;
    }
  }
  const result = (String(resultNumber));
  const question = `Question: ${number1} ${number2}`;
  array.push(question);
  array.push(result);
  return array;
};

const startGameGcd = () => {
  const gameQuestion = 'Find the greatest common divisor of given numbers.';
  gameEngine(gameQuestion, calculateResult);
};

export default startGameGcd;
