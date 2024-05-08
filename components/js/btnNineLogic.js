// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnNineLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnNine = document.getElementById("nine")
  const btnOne = document.getElementById("one")
  const btnFive = document.getElementById("five")
  const btnThree = document.getElementById("three")
  const btnSix = document.getElementById("six")
  const btnSeven = document.getElementById("seven")
  const btnEight = document.getElementById("eight")
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
    btnNine.classList.toggle("tic")
    btnNine.style.border = "none"
    setTimeout(() => {
      btnNine.classList.toggle("tic")
      btnNine.style.border = " 2px solid rgb(138, 135, 135)"
      btnNine.style.borderInlineEnd = "none"
      btnNine.style.borderBlockEnd = "none"
    }, 100)

    if (
      btnOne.textContent === btnNine.textContent &&
      btnFive.textContent === btnNine.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnNine.classList.add("anim")
      btnOne.classList.add("anim")
      btnFive.classList.add("anim")
      setTimeout(() => {
        btnNine.classList.remove("anim")
        btnOne.classList.remove("anim")
        btnFive.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnNine.textContent)
      return
    }
    if (
      btnThree.textContent === btnNine.textContent &&
      btnSix.textContent === btnNine.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnNine.classList.add("anim")
      btnThree.classList.add("anim")
      btnSix.classList.add("anim")
      setTimeout(() => {
        btnNine.classList.remove("anim")
        btnThree.classList.remove("anim")
        btnSix.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnNine.textContent)
      return
    }
    if (
      btnSeven.textContent === btnNine.textContent &&
      btnEight.textContent === btnNine.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnNine.classList.add("anim")
      btnSeven.classList.add("anim")
      btnEight.classList.add("anim")
      setTimeout(() => {
        btnNine.classList.remove("anim")
        btnSeven.classList.remove("anim")
        btnEight.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnNine.textContent)
      return
    }
    // if the above fails meaning no win then check for a tie
    tieLogic(btnNine.textContent)
    // if theres no win or tie then call computer
    computerLogic(btnNine.textContent)
  }

  btnNine.addEventListener("click", winLogic)
}

export default btnNineLogic
