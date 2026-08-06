import _ from 'lodash'
import { askQuestion } from '../index.js'
import { interactWithTheUser } from '../index.js'

export const countingNumbers = (userName) => {
  const theNumberOfRounds = 3
  for (let i = 0; i < theNumberOfRounds; i += 1) {
    let firstNumber
    let secondNumber
    firstNumber = _.random(0, 100)
    secondNumber = _.random(0, 100)
    while (firstNumber <= secondNumber) {
      firstNumber = _.random(0, 100)
      secondNumber = _.random(0, 100)
    }

    const arrayOperand = ['+', '-', '*']
    let randomOperand = _.sample(arrayOperand)

    let rightAnswer = countingTheCorrectValue(firstNumber, secondNumber, randomOperand)
    let questionForUser = `${firstNumber} ${randomOperand} ${secondNumber}`
    let answer = Number(askQuestion(questionForUser))
    let stop = Number(interactWithTheUser(answer, rightAnswer, userName))
    if (stop === 1) {
      return
    }
  }
  return console.log(`Congratulations, ${userName}!`)
}

const countingTheCorrectValue = (firstNumber, secondNumber, randomOperand) => {
  switch (randomOperand) {
    case '+':
      return firstNumber + secondNumber
    case '-':
      return firstNumber - secondNumber
    case '*':
      return firstNumber * secondNumber
  }
}
