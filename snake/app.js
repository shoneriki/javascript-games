document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelector('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('start')

  const width = 10
  let currentIndex = 0
  let appleIindex = 0
  let currentSnake = [2, 1, 0]
  let direction = 1
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0

  //start and restart game
  function startGame() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0
    //randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2, 1, 0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    interval = setInterval(moveOutcomes, intervalTime)
  }

  // function for all outcomes
  function moveOutcomes() {
    // deals with snake hitting border
    if (
      (currentSnake[0] + width >= (width * width) && direction === width) || // if snake hits bottom
      (currentSnake[0] % width === width -1 && direction === 1) || // snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || // snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) ||
      squares[currentSnake[0] + direction].classList.contains('snake') // if snake  head hits body
    ) {
      return clearInterval(interval) // clear interval if above scenarios happen
    }
    //deals with snake eating apple

  }


  //assign functions to keycodes
  function control(e) {
    squares[currentIndex].classList.remove('snake')

    if(e.keyCode === 39) {
      direction = 1 // right arrow
    } else if (e.keycode === 38) {
      direction = -width // up arrow
    } else if (e.keycode === 37) {
      direction -1 // left arrow
    } else if (e.keyCode === 40) {
      direction = +width //down arrow
    }
  }

  document.addEventListener('keyup', control)

})
