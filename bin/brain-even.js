#!/usr/bin/env node
import isEven from '../src/evengame.js';
import welcomeGame from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = welcomeGame();
isEven(name);
