import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const operators = ['+', '-', '*'];

const calcResult = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator');
  }
};

const genQuestionAndAnswer = () => {
  const number1 = getRandomInt(20, 30);
  const number2 = getRandomInt(10, 20);
  const operatorIndex = getRandomInt(0, operators.length - 1);
  const answerIsCalc = calcResult(number1, operators[operatorIndex], number2);
  const correctAnswer = (String(answerIsCalc));
  const question = `${number1} ${operators[operatorIndex]} ${number2}`;
  return [question, correctAnswer];
};

const showTask = 'What is the result of the expression?';

const startGameCalc = () => {
  runGameEngine(showTask, genQuestionAndAnswer);
};

export default startGameCalc;
