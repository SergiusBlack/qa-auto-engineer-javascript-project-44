#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('brain-prime');
console.log('');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime, otherwise answer "no".');

let answer = '';
let countOfCorrectAnswers = 0;

while (countOfCorrectAnswers < 3) {
  const number = Math.round(Math.random() * 100);
  let result = 'yes';

  console.log(`Question: ${number}`);
  answer = readlineSync.question('Your answer: ');

  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      result = 'no';
      break;
    }
  }

  if (result === answer) {
    console.log('Correct!');
    countOfCorrectAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (countOfCorrectAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
