import readlineSync from 'readline-sync'
const arrayCount = [15, 6, 7]
let count
const checkingForAnEvenNumber = (userName) => {
  for (let i = 0; i < arrayCount.length; i += 1) {
    let answer = readlineSync.question(`Question: ${arrayCount[i]}`)
    count = arrayCount[i]
    if (arrayCount[i] % 2 === 0 && answer === 'yes') {
      console.log('Your answer: yes')
      console.log('Correct!')
    }
    else if (arrayCount[i] % 2 !== 0 && answer === 'no') {
      console.log('Your answer: no')
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${choosingTheCorrectAnswer(count)}'.\n Let's try again, ${userName}!`)
      return
    }
  }
  return console.log(`Congratulations, ${userName}!`)
}

const choosingTheCorrectAnswer = (count) => {
  let rightAnswer
  if (count % 2 === 0) {
    rightAnswer = 'yes'
  }
  else if (count % 2 !== 0) {
    rightAnswer = 'no'
  }
  return rightAnswer
}
export { checkingForAnEvenNumber }
