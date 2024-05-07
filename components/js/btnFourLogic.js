// import playerWinLogic
import playerWinLogic from "./playerWinLogic"
// import tie Logic
import tieLogic from "./TieLogic"
// import click audio
import sound from "../../assets/mixkit-game-click-1114.wav"
// import computer logic
import computerLogic from "./computerLogic"

const btnFourLogic = () => {
  //declare  buttons  which determines win for btnOne
  const btnFour = document.getElementById("four")
  const btnOne = document.getElementById("one")
  const btnSeven = document.getElementById("seven")
  const btnFive = document.getElementById("five")
  const btnSix = document.getElementById("six")
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
      btnOne.textContent === btnFour.textContent &&
      btnSeven.textContent === btnFour.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnFour.classList.add("anim")
      btnOne.classList.add("anim")
      btnSeven.classList.add("anim")
      setTimeout(() => {
        btnFour.classList.remove("anim")
        btnOne.classList.remove("anim")
        btnSeven.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnFour.textContent)
      return
    }
    if (
      btnFive.textContent === btnFour.textContent &&
      btnSix.textContent === btnFour.textContent
    ) {
      // lock all btns
      allbtns.forEach((btn) => (btn.disabled = true))
      // animate
      btnFour.classList.add("anim")
      btnFive.classList.add("anim")
      btnSix.classList.add("anim")
      setTimeout(() => {
        btnFour.classList.remove("anim")
        btnFive.classList.remove("anim")
        btnSix.classList.remove("anim")
      }, 3000)
      // call win
      playerWinLogic(btnFour.textContent)
      return
    }
    // if all the above fail meaning no win then check for a tie
    tieLogic(btnFour.textContent)
    // if theres no tie or win then call computer
    computerLogic(btnFour.textContent)
  }

  btnFour.addEventListener("click", winLogic)
}

export default btnFourLogic
