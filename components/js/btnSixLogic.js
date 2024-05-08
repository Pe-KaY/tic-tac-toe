// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnSixLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnSix = document.getElementById("six")
  const btnThree = document.getElementById("three")
  const btnNine = document.getElementById("nine")
  const btnFour = document.getElementById("four")
  const btnFive = document.getElementById("five")
  // click sound
  const audio = new Audio(sound)
  // all buttons
  const allbtns = document.querySelectorAll(".btns")

  // WinLogic compare buttons symbol (textContent) to compare for wins
  const winLogic = () => {
    //play sound
    audio.currentTime = 0
    audio.play()
    // click symbol entrance animation
    btnSix.classList.toggle("tic")
    btnSix.style.border = "none"
    setTimeout(() => {
      btnSix.classList.toggle("tic")
      btnSix.style.border = " 2px solid rgb(138, 135, 135)"
      btnSix.style.borderInlineEnd = "none"
    }, 100)

    if (
      btnThree.textContent === btnSix.textContent &&
      btnNine.textContent === btnSix.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnSix.classList.add("anim")
      btnThree.classList.add("anim")
      btnNine.classList.add("anim")
      setTimeout(() => {
        btnSix.classList.remove("anim")
        btnThree.classList.remove("anim")
        btnNine.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnSix.textContent)
      return
    }
    if (
      btnFour.textContent === btnSix.textContent &&
      btnFive.textContent === btnSix.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnSix.classList.add("anim")
      btnFour.classList.add("anim")
      btnFive.classList.add("anim")
      setTimeout(() => {
        btnSix.classList.remove("anim")
        btnFour.classList.remove("anim")
        btnFive.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnSix.textContent)
      return
    }
    // if the above fails meaning no win then check for a tie
    tieLogic(btnSix.textContent)
    // if theres no win or tie then call computer
    computerLogic(btnSix.textContent)
  }

  btnSix.addEventListener("click", winLogic)
}

export default btnSixLogic
