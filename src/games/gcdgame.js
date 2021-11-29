import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const args = () => {
  const num1 = getRndInteger(1, 100);
  const num2 = getRndInteger(1, 100);
  const question = `${num1} ${num2}`;
  let divider = 1;
  for (let i = num1; i > 0; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      if (divider < i) {
        divider = i;
      }
    }
  } const correctAnswer = String(divider);
  return { question, correctAnswer };
};

const findDivider = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  logicOfGames(gameRules, args);
};

export default findDivider;
