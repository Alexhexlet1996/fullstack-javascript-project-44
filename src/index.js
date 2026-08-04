import readlineSync from 'readline-sync'

export const askQuestion = (questionForUser) => {
  let answer = readlineSync.question(`Question: ${questionForUser}`)
  return answer
}
