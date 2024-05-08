// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"

// import computer logic
import computerLogic from "./computerLogic"

const btnTwoLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnTwo = document.getElementById("two")
  const btnOne = document.getElementById("one")
  const btnThree = document.getElementById("three")
  const btnFive = document.getElementById("five")
  const btnEight = document.getElementById("eight")
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
    btnTwo.classList.toggle("tic")
    btnTwo.style.border = "none"
    setTimeout(() => {
      btnTwo.classList.toggle("tic")
      btnTwo.style.border = " 2px solid rgb(138, 135, 135)"
      btnTwo.style.borderBlockStart = "none"
    }, 100)

    if (
      btnOne.textContent === btnTwo.textContent &&
      btnThree.textContent === btnTwo.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnTwo.classList.add("anim")
      btnOne.classList.add("anim")
      btnThree.classList.add("anim")
      setTimeout(() => {
        btnTwo.classList.remove("anim")
        btnOne.classList.remove("anim")
        btnThree.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnTwo.textContent)
      return
    }
    if (
      btnFive.textContent === btnTwo.textContent &&
      btnEight.textContent === btnTwo.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnTwo.classList.add("anim")
      btnFive.classList.add("anim")
      btnEight.classList.add("anim")
      setTimeout(() => {
        btnTwo.classList.remove("anim")
        btnFive.classList.remove("anim")
        btnEight.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnTwo.textContent)
      return
    }
    // if all the above fails then check for tie
    tieLogic(btnTwo.textContent)
    // if theres no tie then computers turn
    computerLogic(btnTwo.textContent)
  }

  btnTwo.addEventListener("click", winLogic)
}

export default btnTwoLogic
