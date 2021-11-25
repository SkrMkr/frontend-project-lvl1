import { logicOfGames, getRndInteger } from '../index.js';

const progression = () => {
  const args = () => {
    const stepCount = getRndInteger(1, 100);
    const mas = [];
    const firstNum = getRndInteger(0, 100);
    let num = firstNum;
    for (let i = 0; i < 10; i += 1) {
      num += stepCount;
      mas.push(num);
    }
    const indexRandom = getRndInteger(0, 9);
    const correctAnswer = String(mas[indexRandom]);
    mas[indexRandom] = '..';
    const question = mas.join(', ');
    return { question, correctAnswer };
  };
  const gameRules = 'What number is missing in the progression?';
  logicOfGames(gameRules, args);
};

export default progression;
