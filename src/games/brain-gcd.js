import _ from 'lodash'
import { askQuestion } from '../index.js'
import { interactWithTheUser } from '../index.js'

export const findGreaCommDivisor = (userName) => {
  const theNumberOfRounds = 3
  for (let n = 0; n < theNumberOfRounds; n += 1) {
    let count1 = _.random(0, 100)
    let count2 = _.random(0, 100)
    let rightAnswer = Number(determiningTheCorrectAnswer(count1, count2))
    let questionForUser = `${count1} ${count2}`
    let answer = Number(askQuestion(questionForUser))
    let stop = Number(interactWithTheUser(answer, rightAnswer, userName))
    if (stop === 1) {
      return
    }
  }
  return console.log(`Congratulations, ${userName}!`)
}

const determiningTheCorrectAnswer = (count1, count2) => {
  let divisibilityCheck = 10
  const divisorFirstNumber = [1]
  const divisorSecondNumber = [1]
  for (let i = 2; i <= divisibilityCheck; i += 1) {
    let firstCount = count1 % i
    let secondCount = count2 % i
    if (firstCount === 0) {
      divisorFirstNumber.push(i)
    }
    if (secondCount === 0) {
      divisorSecondNumber.push(i)
    }
  }
  divisorFirstNumber.push(count1)
  divisorSecondNumber.push(count2)
  const theCommonDivisor = _.intersection(divisorFirstNumber, divisorSecondNumber)
  const sortedTheCommonDivisor = sortTheArray(theCommonDivisor)
  let greaCommDivisor = sortedTheCommonDivisor.pop()
  return greaCommDivisor
}

const sortTheArray = (theCommonDivisor) => {
  let stepsCount = theCommonDivisor.length - 1
  let swapped
  do {
    swapped = false

    for (let i = 0; i < stepsCount; i += 1) {
      if (theCommonDivisor[i] > theCommonDivisor[i + 1]) {
        const temp = theCommonDivisor[i]
        theCommonDivisor[i] = theCommonDivisor[i + 1]
        theCommonDivisor[i + 1] = temp

        swapped = true
      }
      stepsCount -= 1
    }
  } while (swapped)
  return theCommonDivisor
}
