#!/usr/bin/env node
import { toGreet } from '../src/cli.js'
import { checkingForAnEvenNumber } from '../src/logic.js'
console.log('Welcome to the Brain Games!')
const userName = toGreet()
console.log(checkingForAnEvenNumber(userName))
