import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const args = () => {
  const num = getRndInteger(0, 999);
  const question = num;
  let correctAnswer = 'no';
  if (num % 2 === 0) {
    correctAnswer = 'yes';
  }
  return { question, correctAnswer };
};

const isEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  logicOfGames(gameRules, args);
};

export default isEven;
