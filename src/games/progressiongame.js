import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (stepCount, firstNum) => {
  let numOfProgression = firstNum;
  const lengthOfSeries = 10;
  const progression = [];
  for (let i = 0; i < lengthOfSeries; i += 1) {
    numOfProgression += stepCount;
    progression.push(numOfProgression);
  }
  return progression;
};

const getRightCondition = () => {
  const stepCount = getRndInteger(1, 100);
  const firstNum = getRndInteger(0, 100);
  const progression = getProgression(stepCount, firstNum);
  const indexRandom = getRndInteger(0, progression.length - 1);
  const correctAnswer = String(progression[indexRandom]);
  progression[indexRandom] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

const progressionGame = () => {
  logicOfGames(gameRules, getRightCondition);
};

export default progressionGame;
