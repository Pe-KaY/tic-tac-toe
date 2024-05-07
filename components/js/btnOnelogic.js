// import player Win Logic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnOneLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnOne = document.getElementById("one")
  const btnTwo = document.getElementById("two")
  const btnThree = document.getElementById("three")
  const btnFour = document.getElementById("four")
  const btnSeven = document.getElementById("seven")
  const btnFive = document.getElementById("five")
  const btnNine = document.getElementById("nine")
  // click sound
  const audio = new Audio(sound)
  // all buttons
  const allbtns = document.querySelectorAll(".btns")

  // WinLogic compare buttons symbol (textContent) to compare for wins
  const winLogic = () => {
    // play click sound
    audio.currentTime = 0
    audio.play()

    if (
      btnTwo.textContent === btnOne.textContent &&
      btnThree.textContent === btnOne.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnOne.classList.add("anim")
      btnTwo.classList.add("anim")
      btnThree.classList.add("anim")
      setTimeout(() => {
        btnOne.classList.remove("anim")
        btnTwo.classList.remove("anim")
        btnThree.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnOne.textContent)
      return
    }

    if (
      btnFour.textContent === btnOne.textContent &&
      btnSeven.textContent === btnOne.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // amiate
      btnOne.classList.add("anim")
      btnFour.classList.add("anim")
      btnSeven.classList.add("anim")
      setTimeout(() => {
        btnOne.classList.remove("anim")
        btnFour.classList.remove("anim")
        btnSeven.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnOne.textContent)
      return
    }
    if (
      btnFive.textContent === btnOne.textContent &&
      btnNine.textContent === btnOne.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnOne.classList.add("anim")
      btnFive.classList.add("anim")
      btnNine.classList.add("anim")
      setTimeout(() => {
        btnOne.classList.remove("anim")
        btnFive.classList.remove("anim")
        btnNine.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnOne.textContent)
      return
    }
    // if all the above fails then check if it a tie
    tieLogic(btnOne.textContent)
    // if theres no tie then computers turn
    computerLogic(btnOne.textContent)
  }

  btnOne.addEventListener("click", winLogic)
}

export default btnOneLogic
