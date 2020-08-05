import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const progressionLength = 10;

const genProgression = (firstItem, step) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const current = firstItem + i * step;
    progression.push(current);
  }
  return progression;
};

const genQuestionAndAnswer = () => {
  const firstItem = getRandomInt(1, progressionLength);
  const step = getRandomInt(2, progressionLength);
  const replaceIndex = getRandomInt(0, progressionLength - 1);
  const progression = genProgression(firstItem, step);
  const correctAnswer = (String(progression[replaceIndex]));
  progression[replaceIndex] = '..';
  const question = progression.join(', ');
  return [question, correctAnswer];
};

const task = 'What number is missing in the progression?';

const startGameProgression = () => {
  runGameEngine(task, genQuestionAndAnswer);
};

export default startGameProgression;
