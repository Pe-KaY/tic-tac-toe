// this will be the tieScore
// it defined outside the function to avoid it being reset on each function call
// this method is called "CLOSURE"
// meaning the function can have access to this score wherever it imported
let tie = 0
// import computer logic
import computerLogic from "./computerLogic"
// import sound effect
import sound from "../../assets/mixkit-chalk-line-sound-2372.wav"
// sound effects
const audio = new Audio(sound)

const tieLogic = (symbol) => {
  // declares tiescore text display and buttons
  const tieScoreText = document.querySelector(".draw")
  const btns = Array.from(document.querySelectorAll(".btns"))
  //   uses every method to check if every button
  // have disabled set to true meaning every button is clicked with no win
  // so therefore a tie
  const checktie = btns.every((btn) => btn.textContent !== "")
  if (checktie) {
    // increase the tie value plus 1
    tie++
    // displays tieScore
    tieScoreText.textContent = tie
    // animate
    tieScoreText.classList.toggle("shakeX")
    setTimeout(() => {
      tieScoreText.classList.toggle("shakeX")
    }, 1500)
    // play sound
    setTimeout(() => {
      audio.currentTime = 0
      audio.play()
    }, 1000)
    // reset all buttons back to default for a new game
    setTimeout(() => {
      btns.forEach((btn) => {
        btn.textContent = ""
        btn.disabled = false
      })
      if (symbol === "X") {
        computerLogic()
      }
    }, 3000)
  }
}

export default tieLogic
