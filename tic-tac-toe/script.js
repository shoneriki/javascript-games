const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn

startGame()


// 0.1
function startGame() {
  cellElements.forEach(cell => {
  circleTurn = false
  cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
}

// 1
function handleClick(e) {
  // 1.1 placeMark
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  // 1.2 check for win
  if (checkWin(currentClass)) {
    endGame(false)
  }
  // 1.3 check for draw
  // 1.4 swap turns
  swapTurns()
  setBoardHoverClass()
}

// 1.1
function endGame(draw) {
  if(draw) {

  } else {
    winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
  }
  winningMessageElement.classList.add('show')
}

// 2
function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}

// 3
function swapTurns() {
  circleTurn = !circleTurn
}

// 4
function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}
