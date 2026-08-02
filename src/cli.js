import readlineSync from 'readline-sync'

const toGreet = () => {
  let userName = readlineSync.question('Your answer: ')
  console.log(`Hello, ${userName}!`)
  return userName
}

export { toGreet }
