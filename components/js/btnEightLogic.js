// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnEightLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnEight = document.getElementById("eight")
  const btnTwo = document.getElementById("two")
  const btnFive = document.getElementById("five")
  const btnSeven = document.getElementById("seven")
  const btnNine = document.getElementById("nine")
  // click sound
  const audio = new Audio(sound)
  // all buttons
  const allbtns = document.querySelectorAll(".btns")

  // WinLogic compare buttons symbol (textContent) to compare for wins
  const winLogic = () => {
    // play sound
    audio.currentTime = 0
    audio.play()
    // click symbol entrance animation
    btnEight.classList.toggle("tic")
    btnEight.style.border = "none"
    setTimeout(() => {
      btnEight.classList.toggle("tic")
      btnEight.style.border = " 2px solid rgb(138, 135, 135)"
      btnEight.style.borderBlockEnd = "none"
    }, 100)

    if (
      btnTwo.textContent === btnEight.textContent &&
      btnFive.textContent === btnEight.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnEight.classList.add("anim")
      btnTwo.classList.add("anim")
      btnFive.classList.add("anim")
      setTimeout(() => {
        btnEight.classList.remove("anim")
        btnTwo.classList.remove("anim")
        btnFive.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnEight.textContent)
      return
    }
    if (
      btnSeven.textContent === btnEight.textContent &&
      btnNine.textContent === btnEight.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnEight.classList.add("anim")
      btnSeven.classList.add("anim")
      btnNine.classList.add("anim")
      setTimeout(() => {
        btnEight.classList.remove("anim")
        btnSeven.classList.remove("anim")
        btnNine.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnEight.textContent)
      return
    }
    // if the above fails meaning no win then check for a tie
    tieLogic(btnEight.textContent)
    // if theres no win or tie then call computer
    computerLogic(btnEight.textContent)
  }

  btnEight.addEventListener("click", winLogic)
}

export default btnEightLogic
