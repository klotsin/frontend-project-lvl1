import gameEngine from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const calculateResult = () => {
  const array = [];
  const char = ['+', '-', '*'];
  const number1 = getRandomInt(30);
  const number2 = getRandomInt(20);
  const charIndex = getRandomInt(2);
  let answerIsCalc = 0;
  if (char[charIndex] === '+') {
    answerIsCalc = number1 + number2;
  } else if (char[charIndex] === '-') {
    answerIsCalc = number1 - number2;
  } else {
    answerIsCalc = number1 * number2;
  }
  const result = (String(answerIsCalc));
  const question = `Question: ${number1} ${char[charIndex]} ${number2}`;
  array.push(question);
  array.push(result);
  return array;
};

const startGameCalc = () => {
  const gameQuestion = 'What is the result of the expression?';
  gameEngine(gameQuestion, calculateResult);
};

export default startGameCalc;
