var DETAILS = {
  initialRange: 2,
  range_step: 1,
}
console.log(1<='2'<=2)
var gameOn = false
var count = 0
var currentRange = DETAILS.initialRange;
generateNumber = (range) => {
  let guessedNum = Math.floor(Math.random()*range + 1)
  return guessedNum
}
console.log('Welcome to my number challenge...\nNUMBER GUESSING GAME')
var userName = prompt("Enter your username")
// prompt('Hit "Enter" to start game 😋')
do {
  count++
  let {range_step} = DETAILS;
  let currentguessedNumber = generateNumber(currentRange)
  console.log(`Stage ${count} (1-${currentRange})`)
  do {var userGuess = prompt("Enter Guess from the given range above")} while(
    !(userGuess && 1<=userGuess<=currentRange && Number.isInteger(parseFloat(userGuess)))
  )
  if (userGuess == currentguessedNumber) {
    console.log(`Correct!🎉 - (score = ${count})`)
    currentRange += range_step
    if (count == 5) {
      prompt('You are about to enter beast Mode("Enter" to continue)')
    }
    if (count == 10) {
      prompt("Yo! you are good. Let's continue")
    }
  }
  else {
    if (count > 1) {
      console.log(`oops Wrong!😢 - (score = ${count - 1})\n${userName}, Welldone, see you some other time 💖`)
    }
    else {
      console.log(`Wrong!😢; ${userName}, Try your best next time`)
    }
    gameOn = true
  }
} while (!gameOn);