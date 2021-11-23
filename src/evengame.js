import readlineSync from 'readline-sync';

const isEven = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      console.log('Correct!');
    } if (num % 2 === 0 && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
      return;
    } if (num % 2 !== 0 && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default isEven;
