import logicOfGames from '../index.js';
import getRndInteger from '../random.js';

const args = () => {
  const arr = ['+', '-', '*'];
  const randomOperation = arr[getRndInteger(0, 2)];
  const num1 = getRndInteger(0, 999);
  const num2 = getRndInteger(0, 999);
  const question = `${num1} ${randomOperation} ${num2}`;
  let answer = 0;
  switch (randomOperation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      console.log('error');
  }
  const correctAnswer = String(answer);
  return { question, correctAnswer };
};
const calcGame = () => {
  const gameRules = 'What is the result of the expression?';
  logicOfGames(gameRules, args);
};

export default calcGame;
