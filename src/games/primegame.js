import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const testForPrime = (number) => {
  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0 && i !== number && i !== 1) {
      return 'no';
    }
  } return 'yes';
};

const getRightCondition = () => {
  const numberRandom = getRndInteger(1, 999);
  const question = numberRandom;
  const correctAnswer = testForPrime(numberRandom);
  return { question, correctAnswer };
};

const isNumPrime = () => {
  logicOfGames(gameRules, getRightCondition);
};

export default isNumPrime;
