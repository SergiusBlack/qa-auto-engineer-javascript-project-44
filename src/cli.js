import readlineSync from 'readline-sync';
import * as gen from './quest-gen.js';

const introduction = () => {
  console.log('brain-games');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
};

const userIntroduction = (nameGame) => {
  console.log(nameGame);
  console.log('');
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  return name;
};

const questionOutput = (nameGame) => {
  let output = '';

  switch (nameGame) {
    case 'brain-even':
      output = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'brain-calc':
      output = 'What is the result of the expression?';
      break;
    case 'brain-gcd':
      output = 'Find the greatest common divisor of given numbers.';
      break;
    case 'brain-progression':
      output = 'What number is missing in the progression?';
      break;
    case 'brain-prime':
      output = 'Answer "yes" if given number is prime. Otherwise answer "no".';
      break;
    default:
      output = '<Missing Data>';
  }

  console.log(output);
};

const runGame = (nameGame, userName, numOfAttempts) => {
  let counter = numOfAttempts;
  while (counter > 0) {
    const questionAnswer = gen.genQuestionAnswerForGame(nameGame);
    const question = gen.parseString(questionAnswer, '#', 'left');
    const answer = gen.parseString(questionAnswer, '#', 'right');

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      counter -= 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default introduction;
export { userIntroduction, questionOutput, runGame };
