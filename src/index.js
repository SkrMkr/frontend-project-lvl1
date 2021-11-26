import readlineSync from 'readline-sync';

export const logicOfGames = (gameRules, args) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name: ');
  console.log(`Hello, ${name}!`);
  console.log(gameRules);

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = args();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// export { logicOfGames, getRndInteger };
