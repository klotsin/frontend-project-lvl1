import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getResult = () => {
  const char = ['+', '-', '*'];
  const number1 = getRandomInt(20, 30);
  const number2 = getRandomInt(10, 20);
  const charIndex = getRandomInt(0, 2);
  let answerIsCalc = 0;
  if (char[charIndex] === '+') {
    answerIsCalc = number1 + number2;
  } else if (char[charIndex] === '-') {
    answerIsCalc = number1 - number2;
  } else {
    answerIsCalc = number1 * number2;
  }
  const correctAnswer = (String(answerIsCalc));
  const askAQuestion = `${number1} ${char[charIndex]} ${number2}`;
  return [askAQuestion, correctAnswer];
};

const showTask = () => 'What is the result of the expression?';

const startGameCalc = () => {
  runGameEngine(showTask, getResult);
};

export default startGameCalc;
