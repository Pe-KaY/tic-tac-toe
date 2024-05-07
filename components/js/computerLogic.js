const computerLogic = (symbol) => {
  if (symbol === "O") {
    return
  }
  //   declare all buttons
  const btnOne = document.getElementById("one")
  const btnTwo = document.getElementById("two")
  const btnThree = document.getElementById("three")
  const btnFour = document.getElementById("four")
  const btnFive = document.getElementById("five")
  const btnSix = document.getElementById("six")
  const btnSeven = document.getElementById("seven")
  const btnEight = document.getElementById("eight")
  const btnNine = document.getElementById("nine")
  //

  // Array of buttons used to pick random click
  const btns = Array.from(document.querySelectorAll(".btns"))
  const clickableBtns = [...btns].filter((btn) => btn.textContent === "")
  // this generate a random pick
  const toclick = Math.floor(Math.random() * clickableBtns.length)
  //

  //   this determines cpu  0 to 5 high and 6 to 7 low
  const decide = Math.floor(Math.random() * 8)
  //

  // this is for a fresh start when it computers turn
  if (btns.every((btn) => btn.textContent === "")) {
    setTimeout(() => {
      clickableBtns[toclick].click()
    }, 400)
    return
  }

  //   makes computer accuracy poor to increas player chance of win
  if (decide == 7) {
    setTimeout(() => {
      clickableBtns[toclick].click()
    }, 400)
    return
  }

  //   makes computer accuracy high and reduces player chances of winning
  if (decide <= 6) {
    // accuracy for button one Wins

    //  btnOne win logic
    if (
      btnTwo.textContent === "O" &&
      btnThree.textContent === "O" &&
      btnOne.textContent === ""
    ) {
      setTimeout(() => {
        btnOne.click()
      }, 400)

      return
    }

    if (
      btnFour.textContent === "O" &&
      btnSeven.textContent === "O" &&
      btnOne.textContent === ""
    ) {
      setTimeout(() => {
        btnOne.click()
      }, 400)
      return
    }
    if (
      btnFive.textContent === "O" &&
      btnNine.textContent === "O" &&
      btnOne.textContent === ""
    ) {
      setTimeout(() => {
        btnOne.click()
      }, 400)
      return
    }

    // btnOne defense logic

    if (
      btnTwo.textContent === "X" &&
      btnThree.textContent === "X" &&
      btnOne.textContent === ""
    ) {
      setTimeout(() => {
        btnOne.click()
      }, 400)

      return
    }

    if (
      btnFour.textContent === "X" &&
      btnSeven.textContent === "X" &&
      btnOne.textContent === ""
    ) {
      setTimeout(() => {
        btnOne.click()
      }, 400)
      return
    }
    if (
      btnFive.textContent === "X" &&
      btnNine.textContent === "X" &&
      btnOne.textContent === ""
    ) {
      setTimeout(() => {
        btnOne.click()
      }, 400)
      return
    }

    // btnTwo Win Logic

    if (
      btnOne.textContent === "O" &&
      btnThree.textContent === "O" &&
      btnTwo.textContent === ""
    ) {
      setTimeout(() => {
        btnTwo.click()
      }, 400)

      return
    }
    if (
      btnFive.textContent === "O" &&
      btnEight.textContent === "O" &&
      btnTwo.textContent === ""
    ) {
      setTimeout(() => {
        btnTwo.click()
      }, 400)
      return
    }

    // btnTwo Defense Logic
    if (
      btnOne.textContent === "X" &&
      btnThree.textContent === "X" &&
      btnTwo.textContent === ""
    ) {
      setTimeout(() => {
        btnTwo.click()
      }, 400)

      return
    }
    if (
      btnFive.textContent === "X" &&
      btnEight.textContent === "X" &&
      btnTwo.textContent === ""
    ) {
      setTimeout(() => {
        btnTwo.click()
      }, 400)
      return
    }

    // btnThree Win Logic

    if (
      btnOne.textContent === "O" &&
      btnTwo.textContent === "O" &&
      btnThree.textContent === ""
    ) {
      setTimeout(() => {
        btnThree.click()
      }, 400)
      return
    }
    if (
      btnFive.textContent === "O" &&
      btnSeven.textContent === "O" &&
      btnThree.textContent === ""
    ) {
      setTimeout(() => {
        btnThree.click()
      }, 3000)

      return
    }
    if (
      btnSix.textContent === "O" &&
      btnNine.textContent === "O" &&
      btnThree.textContent === ""
    ) {
      setTimeout(() => {
        btnThree.click()
      }, 400)
      return
    }

    // btnThree defense Logic

    if (
      btnOne.textContent === "X" &&
      btnTwo.textContent === "X" &&
      btnThree.textContent === ""
    ) {
      setTimeout(() => {
        btnThree.click()
      }, 400)
      return
    }
    if (
      btnFive.textContent === "X" &&
      btnSeven.textContent === "X" &&
      btnThree.textContent === ""
    ) {
      setTimeout(() => {
        btnThree.click()
      }, 3000)

      return
    }
    if (
      btnSix.textContent === "X" &&
      btnNine.textContent === "X" &&
      btnThree.textContent === ""
    ) {
      setTimeout(() => {
        btnThree.click()
      }, 400)
      return
    }

    // btnFour win Logic

    if (
      btnOne.textContent === "O" &&
      btnSeven.textContent === "O" &&
      btnFour.textContent === ""
    ) {
      setTimeout(() => {
        btnFour.click()
      }, 400)

      return
    }
    if (
      btnFive.textContent === "O" &&
      btnSix.textContent === "O" &&
      btnFour.textContent === ""
    ) {
      setTimeout(() => {
        btnFour.click()
      }, 400)

      return
    }

    // btnFour defense Logic

    if (
      btnOne.textContent === "X" &&
      btnSeven.textContent === "X" &&
      btnFour.textContent === ""
    ) {
      setTimeout(() => {
        btnFour.click()
      }, 400)

      return
    }
    if (
      btnFive.textContent === "X" &&
      btnSix.textContent === "X" &&
      btnFour.textContent === ""
    ) {
      setTimeout(() => {
        btnFour.click()
      }, 400)

      return
    }

    // btnFive Win Logic

    if (
      btnOne.textContent === "O" &&
      btnNine.textContent === "O" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }
    if (
      btnTwo.textContent === "O" &&
      btnEight.textContent === "O" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }
    if (
      btnThree.textContent === "O" &&
      btnSeven.textContent === "O" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }
    if (
      btnFour.textContent === "O" &&
      btnSix.textContent === "O" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }

    // btnFive Defense Logic
    if (
      btnOne.textContent === "X" &&
      btnNine.textContent === "X" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }
    if (
      btnTwo.textContent === "X" &&
      btnEight.textContent === "X" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }
    if (
      btnThree.textContent === "X" &&
      btnSeven.textContent === "X" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }
    if (
      btnFour.textContent === "X" &&
      btnSix.textContent === "X" &&
      btnFive.textContent === ""
    ) {
      setTimeout(() => {
        btnFive.click()
      }, 400)

      return
    }

    // btnSix Win Logic

    if (
      btnThree.textContent === "O" &&
      btnNine.textContent === "O" &&
      btnSix.textContent === ""
    ) {
      setTimeout(() => {
        btnSix.click()
      }, 400)

      return
    }
    if (
      btnFour.textContent === "O" &&
      btnFive.textContent === "O" &&
      btnSix.textContent === ""
    ) {
      setTimeout(() => {
        btnSix.click()
      }, 400)

      return
    }

    // btnSix Defense Logic

    if (
      btnThree.textContent === "X" &&
      btnNine.textContent === "X" &&
      btnSix.textContent === ""
    ) {
      setTimeout(() => {
        btnSix.click()
      }, 400)

      return
    }
    if (
      btnFour.textContent === "X" &&
      btnFive.textContent === "X" &&
      btnSix.textContent === ""
    ) {
      setTimeout(() => {
        btnSix.click()
      }, 400)

      return
    }

    // btnSeven Win Logic

    if (
      btnOne.textContent === "O" &&
      btnFour.textContent === "O" &&
      btnSeven.textContent === ""
    ) {
      setTimeout(() => {
        btnSeven.click()
      }, 400)

      return
    }
    if (
      btnThree.textContent === "O" &&
      btnFive.textContent === "O" &&
      btnSeven.textContent === ""
    ) {
      setTimeout(() => {
        btnSeven.click()
      }, 400)

      return
    }
    if (
      btnEight.textContent === "O" &&
      btnNine.textContent === "O" &&
      btnSeven.textContent === ""
    ) {
      setTimeout(() => {
        btnSeven.click()
      }, 400)

      return
    }

    // btnSeven Defense Logic

    if (
      btnOne.textContent === "X" &&
      btnFour.textContent === "X" &&
      btnSeven.textContent === ""
    ) {
      setTimeout(() => {
        btnSeven.click()
      }, 400)

      return
    }
    if (
      btnThree.textContent === "X" &&
      btnFive.textContent === "X" &&
      btnSeven.textContent === ""
    ) {
      setTimeout(() => {
        btnSeven.click()
      }, 400)

      return
    }
    if (
      btnEight.textContent === "X" &&
      btnNine.textContent === "X" &&
      btnSeven.textContent === ""
    ) {
      setTimeout(() => {
        btnSeven.click()
      }, 400)

      return
    }

    // btnEight Win Logic

    if (
      btnTwo.textContent === "O" &&
      btnFive.textContent === "O" &&
      btnEight.textContent === ""
    ) {
      setTimeout(() => {
        btnEight.click()
      }, 400)

      return
    }
    if (
      btnSeven.textContent === "O" &&
      btnNine.textContent === "O" &&
      btnEight.textContent === ""
    ) {
      setTimeout(() => {
        btnEight.click()
      }, 400)

      return
    }

    // btnEight Defense Logic

    if (
      btnTwo.textContent === "X" &&
      btnFive.textContent === "X" &&
      btnEight.textContent === ""
    ) {
      setTimeout(() => {
        btnEight.click()
      }, 400)

      return
    }
    if (
      btnSeven.textContent === "X" &&
      btnNine.textContent === "X" &&
      btnEight.textContent === ""
    ) {
      setTimeout(() => {
        btnEight.click()
      }, 400)

      return
    }

    // btnNine Win Logic

    if (
      btnOne.textContent === "O" &&
      btnFive.textContent === "O" &&
      btnNine.textContent === ""
    ) {
      setTimeout(() => {
        btnNine.click()
      }, 400)

      return
    }
    if (
      btnThree.textContent === "O" &&
      btnSix.textContent === "O" &&
      btnNine.textContent === ""
    ) {
      setTimeout(() => {
        btnNine.click()
      }, 400)

      return
    }
    if (
      btnSeven.textContent === "O" &&
      btnEight.textContent === "O" &&
      btnNine.textContent === ""
    ) {
      setTimeout(() => {
        btnNine.click()
      }, 400)

      return
    }

    // btnNine Defense Logic

    if (
      btnOne.textContent === "X" &&
      btnFive.textContent === "X" &&
      btnNine.textContent === ""
    ) {
      setTimeout(() => {
        btnNine.click()
      }, 400)

      return
    }
    if (
      btnThree.textContent === "X" &&
      btnSix.textContent === "X" &&
      btnNine.textContent === ""
    ) {
      setTimeout(() => {
        btnNine.click()
      }, 400)

      return
    }
    if (
      btnSeven.textContent === "X" &&
      btnEight.textContent === "X" &&
      btnNine.textContent === ""
    ) {
      setTimeout(() => {
        btnNine.click()
      }, 400)

      return
    }
  }
  setTimeout(() => {
    clickableBtns[toclick].click()
  }, 400)
}

export default computerLogic
