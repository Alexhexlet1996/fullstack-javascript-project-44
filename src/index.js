import readlineSync from 'readline-sync'

export const askQuestion = (questionForUser) => {
  let answer = readlineSync.question(`Question: ${questionForUser}`)
  return answer
}

export const interactWithTheUser = (answer, rightAnswer, userName) => {
  if (answer === rightAnswer) {
    console.log(`Your answer: ${answer}`)
    console.log('Correct!')
    return 0
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`)

    return 1
  }
}
