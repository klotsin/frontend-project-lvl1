import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const genProgression = (initialValue, progressStep) => {
  const progression = [];
  progression.push(String(initialValue));
  let stepChange = initialValue;
  for (let i = 0; i < 9; i += 1) {
    stepChange += progressStep;
    progression.push(String(stepChange));
  }
  return progression;
};

const genQuestionAndAnswer = () => {
  const initialValue = getRandomInt(1, 10);
  const progressStep = getRandomInt(2, 10);
  const replaceIndex = getRandomInt(0, 10);
  const progression = genProgression(initialValue, progressStep);
  const correctAnswer = (`${progression[replaceIndex]}`);
  progression[replaceIndex] = '..';
  const question = progression.join(', ');
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';

const startGameProgression = () => {
  runGameEngine(task, genQuestionAndAnswer);
};

export default startGameProgression;
