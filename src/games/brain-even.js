import _ from 'lodash'
import { askQuestion } from '../index.js'
import { interactWithTheUser } from '../index.js'

const checkingForAnEvenNumber = (userName) => {
  const theNumberOfRounds = 3
  for (let i = 0; i < theNumberOfRounds; i += 1) {
    let randomCount = _.random(0, 100)
    let rightAnswer = choosingTheCorrectAnswer(randomCount)
    let questionForUser = `${randomCount}`
    let answer = askQuestion(questionForUser)
    let stop = Number(interactWithTheUser(answer, rightAnswer, userName))
    if (stop === 1) {
      return
    }
  }
  return console.log(`Congratulations, ${userName}!`)
}

const choosingTheCorrectAnswer = (randomCount) => {
  let rightAnswer
  if (randomCount % 2 === 0) {
    rightAnswer = 'yes'
  }
  else if (randomCount % 2 !== 0) {
    rightAnswer = 'no'
  }
  return rightAnswer
}
export { checkingForAnEvenNumber }
