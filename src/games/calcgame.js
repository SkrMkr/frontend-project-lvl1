import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const gameRules = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getResultOperation = (randomNumber1, randomNumber2, randomOperation) => {
  let answer = 0;
  switch (randomOperation) {
    case '+':
      answer = randomNumber1 + randomNumber2;
      break;
    case '-':
      answer = randomNumber1 - randomNumber2;
      break;
    case '*':
      answer = randomNumber1 * randomNumber2;
      break;
    default:
      console.log('error');
  }
  return answer;
};

const getRightCondition = () => {
  const randomOperation = operations[getRndInteger(0, operations.length - 1)];
  const randomNumber1 = getRndInteger(0, 999);
  const randomNumber2 = getRndInteger(0, 999);
  const question = `${randomNumber1} ${randomOperation} ${randomNumber2}`;
  const correctAnswer = String(getResultOperation(randomNumber1, randomNumber2, randomOperation));
  return { question, correctAnswer };
};

const calcGame = () => {
  logicOfGames(gameRules, getRightCondition);
};

export default calcGame;
