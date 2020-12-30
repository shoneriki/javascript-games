document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')

  const width = 10
  let currentIndex = 0
  let appleIndex = 0
  let currentSnake = [2,1,0]
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
    randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2,1,0]
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

    const tail = currentSnake.pop() //removes last element in array
    squares[tail].classList.remove('snake') // removes snake class from tail
    currentSnake.unshift(currentSnake[0] + direction) //gives direction to head of array
    //deals with snake eating apple

    if(squares[currentSnake[0]].classList.contains('apple')) {
      squares[currentSnake[0]].classList.remove('apple')
      squares[tail].classList.add('snake')
      currentSnake.push(tail)
      randomApple()
      score++
      scoreDisplay.textContent = score
      clearInterval(interval)
      intervalTime = intervalTime * speed
      interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
  }

  //generate apple
  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length)
    } while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
  }


  //assign functions to keycodes
  function control(e) {
    squares[currentIndex].classList.remove('snake')

    if(e.keyCode === 39) {
      direction = 1 // right arrow
    } else if (e.keyCode === 38) {
      direction = -width // up arrow
    } else if (e.keyCode === 37) {
      direction = -1 // left arrow
    } else if (e.keyCode === 40) {
      direction = +width //down arrow
    }
  }

  document.addEventListener('keyup', control)
  startBtn.addEventListener('click', startGame)

})
