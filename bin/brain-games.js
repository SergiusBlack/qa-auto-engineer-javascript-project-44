#!/usr/bin/env node

import readlineSync from 'readline-sync';
import * as cli from '../src/cli.js';

let nameGame = '';
let userName = '';
const numOfAttempts = 3;
let exit = false;

while (exit === false) {
  // game selection
  nameGame = readlineSync.question('Enter the game name(brain-even, brain-calc, brain-gcd, brain-progression, brain-prime): ');

  // user introduction
  if (userName === '') {
    userName = cli.userIntroduction(nameGame);
  } else {
    console.log(nameGame);
    console.log('');
  }

  // question output
  cli.questionOutput(nameGame);

  // game run
  cli.runGame(nameGame, userName, numOfAttempts);

  // exit game
  const exitGame = readlineSync.question('Do you want to play again? (yes/no) ');
  if (exitGame === 'no') {
    exit = true;
  }
}
