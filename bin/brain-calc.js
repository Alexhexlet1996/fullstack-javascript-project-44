#!/usr/bin/env node
import { toGreet } from '../src/cli.js'
import { countingNumbers } from '../src/brain-calc.js'
console.log('Welcome to the Brain Games!')
const userName = toGreet()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
countingNumbers(userName)
