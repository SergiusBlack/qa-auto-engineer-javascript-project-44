#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('brain-progression');
console.log('');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

console.log('What number is missing in the progression?');

let answer = '';
let countOfCorrectAnswers = 0;

while (countOfCorrectAnswers < 3) {
  let number = Math.round(Math.random() * 100);
  const pos = Math.round(Math.random() * 10);
  const step = Math.round(Math.random() * 10);

  let exp = '';
  let result = '';

  for (let i = 1; i <= 10; i += 1, number += step) {
    if (i === pos) {
      exp += '.. ';
      result = String(number);
    } else {
      exp += `${number} `;
    }
  }

  console.log(`Question: ${exp}`);
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
