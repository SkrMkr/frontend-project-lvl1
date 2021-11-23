import { logicOfGames, getRndInteger } from './index.js';

const calcGame = () => {
  const gameRules = 'What is the result of the expression?';
  const args = () => {
    const arr = ['+', '-', '*'];
    const randomOperation = arr[getRndInteger(0, 2)];
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const question = `Question: ${num1} ${randomOperation} ${num2}`;
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
  logicOfGames(gameRules, args);
};

export default calcGame;
