import { askQuestion } from '../index.js'
const arrayCount = [15, 6, 7]
let questionForUser
const checkingForAnEvenNumber = (userName) => {
  for (let i = 0; i < arrayCount.length; i += 1) {
    questionForUser = arrayCount[i]

    let answer = askQuestion(questionForUser)
    if (arrayCount[i] % 2 === 0 && answer === 'yes') {
      console.log('Your answer: yes')
      console.log('Correct!')
    }
    else if (arrayCount[i] % 2 !== 0 && answer === 'no') {
      console.log('Your answer: no')
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${choosingTheCorrectAnswer(questionForUser)}'.\n Let's try again, ${userName}!`)
      return
    }
  }
  return console.log(`Congratulations, ${userName}!`)
}

const choosingTheCorrectAnswer = (questionForUser) => {
  let rightAnswer
  if (questionForUser % 2 === 0) {
    rightAnswer = 'yes'
  }
  else if (questionForUser % 2 !== 0) {
    rightAnswer = 'no'
  }
  return rightAnswer
}
export { checkingForAnEvenNumber }
