import _ from 'lodash'
import { askQuestion } from '../index.js'

export const countingNumbers = (userName) => {
  const numberOfQuestions = 3
  for (let i = 0; i < numberOfQuestions; i += 1) {
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
    let answer = askQuestion(questionForUser)

    if (Number(answer) === rightAnswer) {
      console.log(`Your answer: ${answer}`)
      console.log('Correct!')
    }
    else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`)
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
