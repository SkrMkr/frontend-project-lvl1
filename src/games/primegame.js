import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const testForPrime = (numberRandom) => {
  let correctAnswer = 'yes';
  for (let i = numberRandom; i > 0; i -= 1) {
    if (numberRandom % i === 0 && i !== numberRandom && i !== 1) {
      correctAnswer = 'no';
    }
  } return correctAnswer;
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
