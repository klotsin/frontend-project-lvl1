import gameEngine from '../index.js';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const calculateResult = () => {
  const array = [];
  const progress = [];
  const progressNewarr = [];
  const step = getRandomInt(10);
  const countStart = getRandomInt(10);
  const char = getRandomInt(8);
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
  const result = (`${progress[char + 1]}`);
  const question = `Question: ${progressNewarr[0]} ${progressNewarr[1]} ${progressNewarr[2]} ${progressNewarr[3]} ${progressNewarr[4]} ${progressNewarr[5]} ${progressNewarr[6]} ${progressNewarr[7]} ${progressNewarr[8]} ${progressNewarr[9]}`;
  array.push(question);
  array.push(result);
  return array;
};

const startGameProgression = () => {
  const gameQuestion = 'What number is missing in the progression?';
  gameEngine(gameQuestion, calculateResult);
};

export default startGameProgression;
