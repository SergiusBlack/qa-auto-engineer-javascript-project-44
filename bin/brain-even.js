#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('brain-even');
console.log('');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

let number = 0;
let answer = '';
let countOfCorrectAnswers = 0;

while (countOfCorrectAnswers < 3) {
  number = Math.round(Math.random() * 100);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);

  const result = (number % 2 === 0) ? 'yes' : 'no';
  answer = readlineSync.question('Your answer: ');

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
