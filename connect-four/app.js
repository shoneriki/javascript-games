document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  for (var i = 0, len = squares.length; i < len; i++)

    (function(index) {
      //add onclick to each square in grid
      squares[i].onclick = function(){
        //if square is below current square is taken, you can stack your chip  on top
        if(squares[index + 7].classList.contains('taken')) {
          if (currentPlayer === 1) {
            squares[index].classList.add('taken')
            squares[index].classList.add('player-one')
            // change player
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          } else if (currentPlayer === 2) {
            squares[index].classList.add('taken')
            squares[index].classList.add('player-two')
            // change player back to 1
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
          }
        } else alert('space is unavailable')
      }
    })(i)
})
