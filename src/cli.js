import readlineSync from 'readline-sync'
const toGreet = () => {
  const userName = readlineSync.question('Your answer: ')
  return `Hello,${userName}!`
}
export { toGreet }
