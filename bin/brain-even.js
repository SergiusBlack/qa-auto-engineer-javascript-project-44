#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('brain-even');
console.log('');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

let number = 0;
let answer = 'no';
let countOfCorrectAnswers = 0;

while (countOfCorrectAnswers < 3) {
  number = Math.floor(Math.random() * 100);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${number}`);

  answer = readlineSync.question('Your answer: ');

  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    countOfCorrectAnswers += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (countOfCorrectAnswers === 3) {
  console.log(`Congratulations, ${name}!`);
}
