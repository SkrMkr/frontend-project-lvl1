import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const findRightDivider = (number1, number2) => {
  let divider = 1;
  for (let i = number1; i > 0; i -= 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      if (divider < i) {
        divider = i;
      }
    }
  } return divider;
};

const getRightCondition = () => {
  const numberRandom1 = getRndInteger(1, 100);
  const numberRandom2 = getRndInteger(1, 100);
  const question = `${numberRandom1} ${numberRandom2}`;
  const divider = findRightDivider(numberRandom1, numberRandom2);
  const correctAnswer = String(divider);
  return { question, correctAnswer };
};

const findDivider = () => {
  logicOfGames(gameRules, getRightCondition);
};

export default findDivider;
