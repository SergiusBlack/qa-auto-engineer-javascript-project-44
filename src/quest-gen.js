// math utils:

const parseString = (str, splitter, leftOrRight) => {
  let left = '';
  let right = '';

  for (let i = 0, richSplitter = false; i < str.length; i += 1) {
    if (str[i] === splitter[0]) {
      richSplitter = true;
      i += splitter.length;
    }

    if (!richSplitter) {
      left += str[i];
    } else {
      right += str[i];
    }
  }

  return leftOrRight === 'left' ? left : right;
};
const numRandomizer = (strInterval = '1..100') => {
  const left = Number(parseString(strInterval, '..', 'left'));
  const right = Number(parseString(strInterval, '..', 'right'));

  return Math.round(Math.random() * (right - left) + left);
};

const symbRandomizer = (strOfSymbols) => strOfSymbols[numRandomizer(`0..${strOfSymbols.length - 1}`)];
const getExpressionResult = (numberA, numberB, operand) => {
  switch (operand) {
    case '+':
      return numberA + numberB;
    case '-':
      return numberA - numberB;
    case '*':
      return numberA * numberB;
    default:
      return NaN;
  }
};
const findGCD = (numberA, numberB) => {
  let limit = 0;
  let result = 0;

  if (numberA >= numberB) {
    limit = Math.floor(numberB / 2);
    if (numberA % numberB === 0) return numberB;
  } else {
    limit = Math.floor(numberA / 2);
    if (numberB % numberA === 0) return numberA;
  }

  for (let div = limit; div > 0; div -= 1) {
    if (numberA % div === 0 && numberB % div === 0) {
      result = div;
      break;
    }
  }

  return result;
};

// 'question#answer' string generators:
const genQuestionAnswerForBrainEven = (numInterval = '1..100') => {
  let result = '';
  const number = numRandomizer(numInterval);
  if (number % 2 === 0) {
    result = `${number}#yes`;
  } else {
    result = `${number}#no`;
  }
  return result;
};

const genQuestionAnswerForBrainCalc = (numAInterval = '1..100', numBInterval = '1..100', symbInterval = '+-*') => {
  let result = '';
  const numberA = numRandomizer(numAInterval);
  let numberB = 0;
  const operand = symbRandomizer(symbInterval);
  if (operand === '*') {
    numberB = numRandomizer('1..10');
  } else {
    numberB = numRandomizer(numBInterval);
  }
  result = `${numberA + operand + numberB}#${getExpressionResult(numberA, numberB, operand)}`;
  return result;
};

const genQuestionAnswerForBrainGcd = (numAInterval = '1..100', numBInterval = '1..100') => {
  let result = '';
  const numberA = numRandomizer(numAInterval);
  const numberB = numRandomizer(numBInterval);
  result = `${numberA} ${numberB}#${findGCD(numberA, numberB)}`;
  return result;
};

const genQuestionAnswerForBrainProgression = (numInterval = '-100..100', numStep = '2..30', numPos = '1..10') => {
  let result = '';
  let expression = '';
  let number = numRandomizer(numInterval);
  const pos = numRandomizer(numPos);
  const step = numRandomizer(numStep);
  const rowLength = Number(parseString(numPos, '..', 'right'));

  for (let i = 1; i <= rowLength; i += 1, number += step) {
    if (i === pos) {
      expression += '.. ';
      result = String(number);
    } else {
      expression += `${number} `;
    }
  }
  result = `${expression.trim()}#${result}`;
  return result;
};

const genQuestionAnswerForBrainPrime = (numInterval = '1..100') => {
  let result = '';
  const number = numRandomizer(numInterval);
  let isPrime = 'yes';
  for (let i = 2; i <= Math.floor(number / 2); i += 1) {
    if (number % i === 0) {
      isPrime = 'no';
      break;
    }
  }
  result = `${number}#${isPrime}`;
  return result;
};

const genQuestionAnswerForGame = (nameGame) => {
  switch (nameGame) {
    case 'brain-even':
      return genQuestionAnswerForBrainEven();
    case 'brain-calc':
      return genQuestionAnswerForBrainCalc();
    case 'brain-gcd':
      return genQuestionAnswerForBrainGcd();
    case 'brain-progression':
      return genQuestionAnswerForBrainProgression();
    case 'brain-prime':
      return genQuestionAnswerForBrainPrime();
    default:
      return '<Missing Data>';
  }
};

export {
  parseString,
  genQuestionAnswerForBrainEven,
  genQuestionAnswerForBrainCalc,
  genQuestionAnswerForBrainGcd,
  genQuestionAnswerForBrainProgression,
  genQuestionAnswerForBrainPrime,
  genQuestionAnswerForGame,
};
