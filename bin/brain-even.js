#!/usr/bin/env node
import { toGreet } from '../src/cli.js'
import { checkingForAnEvenNumber } from '../src/games/brain-even.js'
console.log('Welcome to the Brain Games!')
const userName = toGreet()
console.log('Answer "yes" if the number is even, otherwise answer "no".')
checkingForAnEvenNumber(userName)
