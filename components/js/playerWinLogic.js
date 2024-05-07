// these will be the player and computer Score
// it defined outside the function to avoid it being reset on each function call
// this method is called "CLOSURE"
// meaning the function can have access to these scores wherever it imported
let playerScore = 0
let cpuScore = 0
// import win sound
import winsound from "../../assets/mixkit-animated-small-group-applause-523.wav"
import losssound from "../../assets/mixkit-retro-arcade-game-over-470.wav"
// import computer Logic
import computerLogic from "./computerLogic"

const playerWinLogic = (symbol) => {
  const playerScoreText = document.querySelector(".player")
  const cpuScoreText = document.querySelector(".cpu")
  const btns = document.querySelectorAll(".btns")
  const winaudio = new Audio(winsound)
  const lossaudio = new Audio(losssound)

  //   if player wins
  if (symbol === "X") {
    //play win souund
    winaudio.currentTime = 0
    winaudio.play()
    // increase player score by one
    playerScore++
    // animate
    playerScoreText.classList.toggle("shakeX")
    setTimeout(() => {
      playerScoreText.classList.toggle("shakeX")
    }, 1500)
    // display player score
    playerScoreText.textContent = playerScore
    // unlock all buttons for next round
    setTimeout(() => {
      btns.forEach((button) => {
        button.disabled = false
        button.textContent = ""
      })
      if (symbol === "X") {
        computerLogic()
      }
    }, 3000)
  }

  //   if computer wins
  if (symbol === "O") {
    //play win souund
    lossaudio.currentTime = 0
    lossaudio.play()
    // increase computer score by one
    cpuScore++
    // animate
    cpuScoreText.classList.toggle("shakeX")
    setTimeout(() => {
      cpuScoreText.classList.toggle("shakeX")
    }, 1500)
    // display computer score
    cpuScoreText.textContent = cpuScore
    // unlock all buttons for next round
    setTimeout(() => {
      btns.forEach((button) => {
        button.disabled = false
        button.textContent = ""
      })
      if (symbol === "X") {
        computerLogic()
      }
    }, 3000)
  }
}

export default playerWinLogic
