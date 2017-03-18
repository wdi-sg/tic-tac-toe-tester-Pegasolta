//where you write your JS codes

//array to see who has whoWon
//array to track moves
//array to see whose turn is it

// Variable Storage
var movesMade = []
var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var player = "playerOne"
var turn = 1

// Double confirm logical flow of functions
function playerRotate () {
  if (turn%2 === 0) {
    player = "playerTwo"
  }
  else {
    player = "playerOne"
  }
}

function isGameOver () {
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    return true
  }
  else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    return true
  }
  else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    return true
    }
  else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    return true
    }
  else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    return true
    }
  else if (movesMade.length === 8) {
    player = "draw"
    return true
  }
  else {
    return false
  }
}

function whoWon () {
  console.log("whoWon is run")
  if (isGameOver === true) {
    if (player === "playerOne") {
      console.log("player one has won")
      return 1
    }
    else if (player === "playerTwo") {
      console.log("player two has won")
      return 2
    }
    else {
      console.log("it is a draw")
      return 3
    }
  }
  else {
    return 0
  }
}

function restart () { //figure out how to reset player as well
console.log("restart is run")
  if (whoWon() !== 0) {
    console.log("shitty whoWon")
    //insert confirm if want to restart game here
    gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    movesMade = []
    turn = 1
    player = "playerOne"
    return true
    //player variable on which player starts?
  }
  return false
}

function playTurn (index) {
        playerRotate()
    if (typeof(gameBoard[index]) === typeof(2)) {
      var spliced = gameBoard.splice(index, 1)
      movesMade.push(spliced)
      if (player === "playerOne") {
        gameBoard.splice(index, 0, "p1")
      }
      else {
        gameBoard.splice(index, 0, "p2")
      }
      turn++
      isGameOver()
      whoWon()
      restart()
      console.log(turn)
      return true
    }
    return false
  }
