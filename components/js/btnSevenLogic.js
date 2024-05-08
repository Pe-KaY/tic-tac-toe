// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnSevenLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnSeven = document.getElementById("seven")
  const btnOne = document.getElementById("one")
  const btnFour = document.getElementById("four")
  const btnThree = document.getElementById("three")
  const btnFive = document.getElementById("five")
  const btnEight = document.getElementById("eight")
  const btnNine = document.getElementById("nine")
  // click sound
  const audio = new Audio(sound)
  //  all butons
  const allbtns = document.querySelectorAll(".btns")

  // WinLogic compare buttons symbol (textContent) to compare for wins
  const winLogic = () => {
    // play sound
    audio.currentTime = 0
    audio.play()
    // click symbol entrance animation
    btnSeven.classList.toggle("tic")
    btnSeven.style.border = "none"
    setTimeout(() => {
      btnSeven.classList.toggle("tic")
      btnSeven.style.border = " 2px solid rgb(138, 135, 135)"
      btnSeven.style.borderInlineStart = "none"
      btnSeven.style.borderBlockEnd = "none"
    }, 100)

    if (
      btnOne.textContent === btnSeven.textContent &&
      btnFour.textContent === btnSeven.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnSeven.classList.add("anim")
      btnOne.classList.add("anim")
      btnFour.classList.add("anim")
      setTimeout(() => {
        btnSeven.classList.remove("anim")
        btnOne.classList.remove("anim")
        btnFour.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnSeven.textContent)
      return
    }
    if (
      btnThree.textContent === btnSeven.textContent &&
      btnFive.textContent === btnSeven.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnSeven.classList.add("anim")
      btnThree.classList.add("anim")
      btnFive.classList.add("anim")
      setTimeout(() => {
        btnSeven.classList.remove("anim")
        btnThree.classList.remove("anim")
        btnFive.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnSeven.textContent)
      return
    }
    if (
      btnEight.textContent === btnSeven.textContent &&
      btnNine.textContent === btnSeven.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnSeven.classList.add("anim")
      btnEight.classList.add("anim")
      btnNine.classList.add("anim")
      setTimeout(() => {
        btnSeven.classList.remove("anim")
        btnEight.classList.remove("anim")
        btnNine.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnSeven.textContent)
      return
    }
    // if the above fails meaning no win then check for a tie
    tieLogic(btnSeven.textContent)
    // if there is no win or tie the call computer
    computerLogic(btnSeven.textContent)
  }

  btnSeven.addEventListener("click", winLogic)
}

export default btnSevenLogic
