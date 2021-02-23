const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const cellElements = document.querySelectorAll('[data-cell]')
let circleTurn

cellElements.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true })
})

// 1
function handleClick(e) {
  // 1.1 placeMark
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
  placeMark(cell, currentClass)
  // 1.2 check for win
  // 1.3 check for draw
  // 1.4 switch turns
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
}
