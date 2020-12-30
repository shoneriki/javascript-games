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
