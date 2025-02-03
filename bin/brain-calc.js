#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomOperand = (str) => {
  const i = Math.round(((str.length - 1) * Math.random()));
  return str[i];
};

const getExpressionResult = (a, b, operand) => {
  switch (operand) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return undefined;
  }
};

console.log('brain-calc');
console.log('');
console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name?: ');

console.log(`Hello, ${name}!`);

let numberA = 0;
let numberB = 0;
let answer = 'no';
let countOfCorrectAnswers = 0;

while (countOfCorrectAnswers < 3) {
  numberA = Math.round(Math.random() * 100);
  numberB = Math.round(Math.random() * 100);

  const operand = getRandomOperand('+-*');
  const result = getExpressionResult(numberA, numberB, operand);

  console.log('What is the result of the expression?');
  console.log(`Question: ${numberA + operand + numberB}`);

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
