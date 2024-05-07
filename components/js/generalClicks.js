const generalCLicks = () => {
  // players
  let playerOne = true

  // selects all game buttons
  const btns = document.querySelectorAll(".btns")

  btns.forEach((button) => {
    //
    button.addEventListener("click", () => {
      // if it player Ones turn draw 'X' or 'O' for other player
      button.textContent = playerOne ? "X" : "O"
      //  Change Global players for next player
      playerOne = !playerOne
      //  prevent a button from clicked twice
      button.disabled = true
    })
  })
}

export default generalCLicks
