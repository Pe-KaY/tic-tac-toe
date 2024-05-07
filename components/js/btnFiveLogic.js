// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnFiveLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnFive = document.getElementById("five")
  const btnOne = document.getElementById("one")
  const btnNine = document.getElementById("nine")
  const btnTwo = document.getElementById("two")
  const btnEight = document.getElementById("eight")
  const btnThree = document.getElementById("three")
  const btnSeven = document.getElementById("seven")
  const btnFour = document.getElementById("four")
  const btnSix = document.getElementById("six")

  // all buttons
  const allbtns = document.querySelectorAll("btns")
  // click sound
  const audio = new Audio(sound)

  // WinLogic compare buttons symbol (textContent) to compare for wins
  const winLogic = () => {
    // play click sound
    audio.currentTime = 0
    audio.play()

    if (
      btnOne.textContent === btnFive.textContent &&
      btnNine.textContent === btnFive.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnFive.classList.add("anim")
      btnOne.classList.add("anim")
      btnNine.classList.add("anim")
      setTimeout(() => {
        btnFive.classList.remove("anim")
        btnOne.classList.remove("anim")
        btnNine.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnFive.textContent)
      return
    }
    if (
      btnTwo.textContent === btnFive.textContent &&
      btnEight.textContent === btnFive.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))

      btnFive.classList.add("anim")
      btnTwo.classList.add("anim")
      btnEight.classList.add("anim")
      setTimeout(() => {
        btnFive.classList.remove("anim")
        btnTwo.classList.remove("anim")
        btnEight.classList.remove("anim")
      }, 3000)
      playerWinLogic(btnFive.textContent)
      return
    }
    if (
      btnThree.textContent === btnFive.textContent &&
      btnSeven.textContent === btnFive.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnFive.classList.add("anim")
      btnThree.classList.add("anim")
      btnSeven.classList.add("anim")
      setTimeout(() => {
        btnFive.classList.remove("anim")
        btnThree.classList.remove("anim")
        btnSeven.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnFive.textContent)
      return
    }
    if (
      btnFour.textContent === btnFive.textContent &&
      btnSix.textContent === btnFive.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnFive.classList.add("anim")
      btnFour.classList.add("anim")
      btnSix.classList.add("anim")
      setTimeout(() => {
        btnFive.classList.remove("anim")
        btnFour.classList.remove("anim")
        btnSix.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnFive.textContent)
      return
    }
    // if the above fails meaning no win then check for a tie
    tieLogic(btnFive.textContent)
    // if thers no win or tie then call computer
    computerLogic(btnFive.textContent)
  }

  btnFive.addEventListener("click", winLogic)
}

export default btnFiveLogic
