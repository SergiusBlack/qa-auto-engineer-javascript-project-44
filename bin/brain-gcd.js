#!/usr/bin/env node

import readlineSync from 'readline-sync';

const findGCD = (a, b) => {
  let limit = 0;
  let result = 0;

  if (a >= b) {
    limit = Math.floor(b / 2);
    if (a % b === 0) return a;
  } else {
    limit = Math.floor(a / 2);
    if (b % a === 0) return b;
  }

  for (let div = limit; div > 0; div -= 1) {
    if (a % div === 0 && b % div === 0) {
      result = div;
      break;
    }
  }

  return result;
};

console.log('brain-gcd');
console.log('');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

let numberA = 0;
let numberB = 0;
let answer = '';
let countOfCorrectAnswers = 0;

while (countOfCorrectAnswers < 3) {
  numberA = Math.round(Math.random() * 100);
  numberB = Math.round(Math.random() * 100);

  console.log('Find the greatest common divisor of given numbers.');
  console.log(`Question: ${numberA} ${numberB}`);

  const result = findGCD(numberA, numberB);

  answer = readlineSync.question('Your answer: ');

  if ((String(result) === answer)) {
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
