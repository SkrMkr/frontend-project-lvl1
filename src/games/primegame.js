import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const args = () => {
  const num = getRndInteger(1, 999);
  const question = num;
  let correctAnswer = 'yes';
  for (let i = num; i > 0; i -= 1) {
    if (num % i === 0 && i !== num && i !== 1) {
      correctAnswer = 'no';
    }
  }
  return { question, correctAnswer };
};

const isNumPrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  logicOfGames(gameRules, args);
};

export default isNumPrime;
