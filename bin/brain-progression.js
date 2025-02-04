#!/usr/bin/env node

import * as cli from '../src/cli.js';

// init game:
const nameGame = 'brain-progression';
// set number of attempts per game:
const numOfAttempts = 3;
// user introduction:
const userName = cli.userIntroduction(nameGame);
// question output:
cli.questionOutput(nameGame);
// game run:
cli.runGame(nameGame, userName, numOfAttempts);
