import { logicOfGames, getRndInteger } from '../index.js';

const isEven = () => {
  const args = () => {
    const num = getRndInteger(0, 999);
    const question = `Question: ${num}`;
    let correctAnswer = 'no';
    if (num % 2 === 0) {
      correctAnswer = 'yes';
    }
    return { question, correctAnswer };
  };
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  logicOfGames(gameRules, args);
};

export default isEven;
