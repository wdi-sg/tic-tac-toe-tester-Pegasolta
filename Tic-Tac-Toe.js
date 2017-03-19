//where you write your JS codes

//array to see who has whoWon
//array to track moves
//array to see whose turn is it

// Variable Storage
var movesMade = []
var gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
var player = "playerOne"
var turn = 1
// var restart =

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
  console.log("isGameOver is run")
  if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
    whoWon()
    return true
  }
  else if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
    whoWon()
    return true
  }
  else if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
    whoWon()
    return true
    }
  else if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
    whoWon()
    return true
    }
  else if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
    whoWon()
    return true
    }
  else if (movesMade.length === 9) {
    whoWon()
    player = "draw"
    return true
  }
  else {
    return false
  }
  restart()
}

function whoWon () {
  console.log("whoWon is run")
  if (movesMade.length%2 !== 0 && movesMade.length !== 9) {
    console.log("player one has won")
    alert("Congrats Player One, you've WON!!!! BOOM POW POW!")
    return 1
  }
  else if (movesMade.length%2 === 0 && turn > 1) {
    console.log("player two has won")
    alert("Congrats Player Two, you've WON!!!! BOOM POW POW!")
    return 2
  }
  else if (movesMade.length === 9) {
    console.log("it is a draw")
    alert("You guys are such suckers...")
    return 3
  }
  else {
    return 0
  }
}

function restart () {
    //insert confirm if want to restart game here
    gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    movesMade = []
    turn = 1
    player = " "
}

function playTurn (index) {
    playerRotate()
    if (typeof (gameBoard[index]) === typeof (2)) {
      var spliced = gameBoard.splice(index, 1)
      movesMade.push(spliced)
      if (player === "playerOne") {
        gameBoard.splice(index, 0, "p1")
      }
      else {
        gameBoard.splice(index, 0, "p2")
      }
      turn++
      console.log(turn)
      isGameOver()
      return true
    }
  return false
}
