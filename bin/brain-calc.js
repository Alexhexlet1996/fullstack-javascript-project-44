#!/usr/bin/env node
import { toGreet } from '../src/cli.js'
import { countingNumbers } from '../src/games/brain-calc.js'
console.log('Welcome to the Brain Games!')
const userName = toGreet()
console.log('What is the result of the expression?')
countingNumbers(userName)
