import runGameEngine from '../index.js';
import getRandomInt from '../utils.js';

const getResult = () => {
  const progress = [];
  const progressNewarr = [];
  const step = getRandomInt(0, 10);
  const countStart = getRandomInt(0, 10);
  const char = getRandomInt(0, 8);
  progress.push(String(countStart));
  progressNewarr.push(String(countStart));
  let stepChange = countStart;
  for (let i = 0; i < 9; i += 1) {
    stepChange += step;
    progress.push(String(stepChange));
    if (i === char) {
      progressNewarr.push('..');
    } else {
      progressNewarr.push(String(stepChange));
    }
  }
  const correctAnswer = (`${progress[char + 1]}`);
  const askAQuestion = `${progressNewarr[0]} ${progressNewarr[1]} ${progressNewarr[2]} ${progressNewarr[3]} ${progressNewarr[4]} ${progressNewarr[5]} ${progressNewarr[6]} ${progressNewarr[7]} ${progressNewarr[8]} ${progressNewarr[9]}`;
  return [askAQuestion, correctAnswer];
};

const showTask = () => 'What number is missing in the progression?';

const startGameProgression = () => {
  runGameEngine(showTask, getResult);
};

export default startGameProgression;
