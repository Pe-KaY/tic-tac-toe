// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnThreeLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnThree = document.getElementById("three")
  const btnOne = document.getElementById("one")
  const btnTwo = document.getElementById("two")
  const btnFive = document.getElementById("five")
  const btnSeven = document.getElementById("seven")
  const btnSix = document.getElementById("six")
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
    // click symbol entrance animation
    btnThree.classList.toggle("tic")
    btnThree.style.border = "none"
    setTimeout(() => {
      btnThree.classList.toggle("tic")
      btnThree.style.border = " 2px solid rgb(138, 135, 135)"
      btnThree.style.borderBlockStart = "none"
      btnThree.style.borderInlineEnd = "none"
    }, 100)

    if (
      btnOne.textContent === btnThree.textContent &&
      btnTwo.textContent === btnThree.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnThree.classList.add("anim")
      btnOne.classList.add("anim")
      btnTwo.classList.add("anim")
      setTimeout(() => {
        btnThree.classList.remove("anim")
        btnOne.classList.remove("anim")
        btnTwo.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnThree.textContent)
      return
    }
    if (
      btnFive.textContent === btnThree.textContent &&
      btnSeven.textContent === btnThree.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnThree.classList.add("anim")
      btnFive.classList.add("anim")
      btnSeven.classList.add("anim")
      setTimeout(() => {
        btnThree.classList.remove("anim")
        btnFive.classList.remove("anim")
        btnSeven.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnThree.textContent)
      return
    }
    if (
      btnSix.textContent === btnThree.textContent &&
      btnNine.textContent === btnThree.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnThree.classList.add("anim")
      btnSix.classList.add("anim")
      btnNine.classList.add("anim")
      setTimeout(() => {
        btnThree.classList.remove("anim")
        btnSix.classList.remove("anim")
        btnNine.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnThree.textContent)
      return
    }
    // if all the above fails meaning no win then check tie
    tieLogic(btnThree.textContent)
    // if theres no tie then call computer
    computerLogic(btnThree.textContent)
  }

  btnThree.addEventListener("click", winLogic)
}

export default btnThreeLogic
