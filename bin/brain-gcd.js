#!/usr/bin/env node
import { toGreet } from '../src/cli.js'
import { findGreaCommDivisor } from '../src/games/brain-gcd.js'
console.log('Welcome to the Brain Games!')
const userName = toGreet()
console.log('Find the greatest common divisor of given numbers.')
findGreaCommDivisor(userName)
